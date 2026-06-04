import { PrismaClient } from '../generated/client/index.js';
import { emitOrderUpdate } from '../socket/index.js';
import { generateOrderCode } from '../utils/helpers.js';

const prisma = new PrismaClient();

export const getActiveOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { restroid: req.user.id, status: { in: ['PENDING', 'CONFIRMED'] } },
      include: { items: true, table: true },
      orderBy: { createdAt: 'asc' },
    });
    res.json(orders);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const confirmOrder = async (req, res) => {
  try {
    const order = await prisma.order.updateMany({
      where: { id: parseInt(req.params.id), restroid: req.user.id },
      data: { status: 'CONFIRMED' },
    });
    const updated = await prisma.order.findUnique({ where: { id: parseInt(req.params.id) }, include: { items: true, table: true } });
    emitOrderUpdate(req.app.get('io'), req.user.id, updated);
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const completeOrder = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const order = await prisma.order.findUnique({
      where: { id },
      include: { items: true, table: true },
    });
    if (!order || order.restroid !== req.user.id) return res.status(404).json({ error: 'Order not found' });

    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { discount: true, servicecharge: true } });
    const discount = restro.discount || 0;
    const sc = restro.servicecharge || 0;
    const subtotal = order.items.reduce((s, i) => s + i.totalprice, 0);
    const discountAmt = (subtotal * discount) / 100;
    const scAmt = ((subtotal - discountAmt) * sc) / 100;
    const grandtotal = subtotal - discountAmt + scAmt;

    await prisma.order.update({ where: { id }, data: { status: 'COMPLETED', subtotal, discount: discountAmt, servicecharge: scAmt, grandtotal } });

    const history = await prisma.orderHistory.create({
      data: {
        restroid: req.user.id,
        ordercode: order.ordercode,
        tablename: order.table?.name || '',
        customername: order.customername,
        customermob: order.customermob,
        subtotal, discount: discountAmt, servicecharge: scAmt, grandtotal,
        items: {
          create: order.items.map((i) => ({
            name_eng: i.name_eng, name_guj: i.name_guj, name_hindi: i.name_hindi,
            price: i.price, quantity: i.quantity, totalprice: i.totalprice,
          })),
        },
      },
      include: { items: true },
    });

    emitOrderUpdate(req.app.get('io'), req.user.id, { ...order, status: 'COMPLETED' });
    res.json(history);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    await prisma.order.updateMany({
      where: { id: parseInt(req.params.id), restroid: req.user.id },
      data: { status: 'CANCELLED' },
    });
    emitOrderUpdate(req.app.get('io'), req.user.id, { id: parseInt(req.params.id), status: 'CANCELLED' });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const mergeOrders = async (req, res) => {
  try {
    const { orderIds } = req.body;
    if (!orderIds?.length) return res.status(400).json({ error: 'No orders provided' });

    const orders = await prisma.order.findMany({
      where: { id: { in: orderIds }, restroid: req.user.id, status: { in: ['PENDING', 'CONFIRMED'] } },
      include: { items: true, table: true },
    });

    const allItems = orders.flatMap((o) => o.items.map(({ id: _id, orderid: _oid, ...rest }) => rest));
    const merged = await prisma.order.create({
      data: {
        restroid: req.user.id,
        tableid: orders[0].tableid,
        ordercode: generateOrderCode(),
        customername: orders.map((o) => o.customername).filter(Boolean).join(', '),
        status: 'CONFIRMED',
        items: { create: allItems },
      },
      include: { items: true, table: true },
    });

    await prisma.order.updateMany({ where: { id: { in: orderIds } }, data: { status: 'CANCELLED' } });
    emitOrderUpdate(req.app.get('io'), req.user.id, merged);
    res.json(merged);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getSingleHistory = async (req, res) => {
  try {
    const order = await prisma.orderHistory.findFirst({
      where: { id: parseInt(req.params.id), restroid: req.user.id },
      include: { items: true },
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getOrderHistory = async (req, res) => {
  try {
    const { from, to } = req.query;
    const where = { restroid: req.user.id };
    if (from) where.timestamp = { ...where.timestamp, gte: new Date(from) };
    if (to) where.timestamp = { ...where.timestamp, lte: new Date(to) };

    const history = await prisma.orderHistory.findMany({
      where,
      include: { items: true },
      orderBy: { timestamp: 'desc' },
    });
    res.json(history);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getReport = async (req, res) => {
  try {
    const { from, to } = req.query;
    const where = { restroid: req.user.id };
    if (from) where.timestamp = { gte: new Date(from) };
    if (to) where.timestamp = { ...where.timestamp, lte: new Date(new Date(to).setHours(23, 59, 59, 999)) };

    const [orders, revenue, allOrders] = await Promise.all([
      prisma.orderHistory.count({ where }),
      prisma.orderHistory.aggregate({ where, _sum: { grandtotal: true, subtotal: true, discount: true, servicecharge: true } }),
      prisma.orderHistory.findMany({ where, include: { items: true }, orderBy: { timestamp: 'asc' } }),
    ]);

    // Daily revenue breakdown
    const dailyMap = {};
    allOrders.forEach((o) => {
      const day = new Date(o.timestamp).toISOString().split('T')[0];
      if (!dailyMap[day]) dailyMap[day] = { date: day, revenue: 0, orders: 0 };
      dailyMap[day].revenue += o.grandtotal || 0;
      dailyMap[day].orders += 1;
    });
    const daily = Object.values(dailyMap).sort((a, b) => a.date.localeCompare(b.date));

    // Top selling items
    const itemMap = {};
    allOrders.forEach((o) => {
      o.items.forEach((i) => {
        if (!itemMap[i.name_eng]) itemMap[i.name_eng] = { name: i.name_eng, qty: 0, revenue: 0 };
        itemMap[i.name_eng].qty += i.quantity;
        itemMap[i.name_eng].revenue += i.totalprice;
      });
    });
    const topItems = Object.values(itemMap)
      .sort((a, b) => b.qty - a.qty)
      .slice(0, 10);

    // Hourly distribution
    const hourMap = {};
    allOrders.forEach((o) => {
      const h = new Date(o.timestamp).getHours();
      if (!hourMap[h]) hourMap[h] = { hour: `${h}:00`, orders: 0 };
      hourMap[h].orders += 1;
    });
    const hourly = Array.from({ length: 24 }, (_, h) => hourMap[h] || { hour: `${h}:00`, orders: 0 });

    res.json({
      summary: {
        orders,
        grandtotal: revenue._sum.grandtotal || 0,
        subtotal:   revenue._sum.subtotal   || 0,
        discount:   revenue._sum.discount   || 0,
        servicecharge: revenue._sum.servicecharge || 0,
        avgOrderValue: orders > 0 ? (revenue._sum.grandtotal || 0) / orders : 0,
      },
      daily,
      topItems,
      hourly,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getFeedback = async (req, res) => {
  try {
    const feedback = await prisma.feedback.findMany({
      where: { restroid: req.user.id },
      orderBy: { timestamp: 'desc' },
    });
    res.json(feedback);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    await prisma.feedback.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getWaiterRequests = async (req, res) => {
  try {
    const requests = await prisma.waiterRequest.findMany({
      where: { restroid: req.user.id, status: 0 },
      include: { table: true },
      orderBy: { createdAt: 'asc' },
    });
    res.json(requests);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const dismissWaiterRequest = async (req, res) => {
  try {
    await prisma.waiterRequest.updateMany({
      where: { id: parseInt(req.params.id), restroid: req.user.id },
      data: { status: 1 },
    });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
