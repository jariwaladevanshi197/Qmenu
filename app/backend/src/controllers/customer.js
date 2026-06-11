import { PrismaClient } from '../generated/client/index.js';
import { emitNewOrder, emitWaiterCall } from '../utils/realtime.js';
import { generateOrderCode } from '../utils/helpers.js';
import { printKitchenOrder } from '../utils/printOrder.js';

const prisma = new PrismaClient();

export const getRestaurantBySlug = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { slug: req.params.slug },
      select: {
        id: true, restroname: true, slug: true, logo: true, status: true,
        subtype: true, pdf: true, discount: true, servicecharge: true, upiId: true,
        theme: {
          select: {
            id: true, title: true, primaryColor: true, secondaryColor: true,
            accentColor: true, bgColor: true, cardColor: true, textColor: true,
            navBg: true, buttonTextColor: true, fontFamily: true,
            borderRadius: true, darkMode: true,
          },
        },
      },
    });
    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });
    res.json(restro);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getMenu = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true, status: true } });
    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });

    const categories = await prisma.category.findMany({
      where: { restroid: restro.id },
      include: {
        menuItems: { where: { available: true }, orderBy: { id: 'asc' } },
      },
      orderBy: { sortorder: 'asc' },
    });

    res.json(categories);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const placeOrder = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true, status: true, printNodeApiKey: true, printNodePrinterId: true, discount: true, servicecharge: true } });
    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });

    const { tableid, customername, customermob, items, paymentmethod } = req.body;
    if (!items?.length) return res.status(400).json({ error: 'No items provided' });
    // tableid from QR = tableNumber (restaurant-specific). Must provide a valid table.
    if (!tableid) return res.status(400).json({ error: 'Table QR is required to place an order. Please scan your table QR code.' });

    // Resolve tableNumber → actual table DB id
    const table = await prisma.table.findFirst({ where: { tableNumber: parseInt(tableid), restroid: restro.id } });
    if (!table) return res.status(400).json({ error: 'Invalid table. Please scan your table QR code.' });

    const menuItems = await prisma.menuItem.findMany({ where: { id: { in: items.map((i) => i.menuitemid) }, restroid: restro.id } });

    const enriched = items.map((i) => {
      const mi = menuItems.find((m) => m.id === i.menuitemid);
      if (!mi) throw new Error(`Item ${i.menuitemid} not found`);
      const totalprice = mi.price * i.quantity;
      return {
        menuitemid: mi.id, name_eng: mi.name_eng, name_guj: mi.name_guj,
        name_hindi: mi.name_hindi, price: mi.price, quantity: i.quantity, totalprice,
      };
    });

    const subtotal = enriched.reduce((s, i) => s + i.totalprice, 0);
    const discountAmt = restro.discount ? (subtotal * restro.discount) / 100 : 0;
    const scAmt = restro.servicecharge ? ((subtotal - discountAmt) * restro.servicecharge) / 100 : 0;
    const grandtotal = subtotal - discountAmt + scAmt;

    const order = await prisma.order.create({
      data: {
        restroid: restro.id,
        tableid: table.id,
        ordercode: generateOrderCode(),
        customername,
        customermob,
        status: 'PENDING',
        subtotal,
        discount: discountAmt,
        servicecharge: scAmt,
        grandtotal,
        paymentmethod: paymentmethod === 'UPI' ? 'UPI' : 'COUNTER',
        items: { create: enriched },
      },
      include: { items: true, table: true },
    });

    emitNewOrder(req.app.get('io'), restro.id, order);
    printKitchenOrder(order, restro); // fire-and-forget — does not block response
    res.status(201).json({ ordercode: order.ordercode });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getReadyOrders = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { slug: req.params.slug },
      select: { id: true },
    });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });

    const since = new Date(Date.now() - 30 * 60 * 1000); // last 30 minutes
    const orders = await prisma.orderHistory.findMany({
      where: { restroid: restro.id, timestamp: { gte: since } },
      select: { ordercode: true, tablename: true, timestamp: true },
      orderBy: { timestamp: 'desc' },
      take: 20,
    });
    res.json(orders);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getMyOrder = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true } });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });

    const order = await prisma.order.findFirst({
      where: { ordercode: req.params.ordercode, restroid: restro.id },
      include: { items: true, table: true },
    });
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const callWaiter = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true, restrootp: true } });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });

    const { tableid } = req.body;

    // No OTP required â€” anyone on the menu page can call waiter
    let tableName = null;
    let tableDbId = null;
    if (tableid) {
      const table = await prisma.table.findFirst({ where: { tableNumber: parseInt(tableid), restroid: restro.id } });
      if (!table) return res.status(400).json({ error: 'Invalid table' });
      tableName = table.name;
      tableDbId = table.id;
    }

    const request = await prisma.waiterRequest.create({
      data: { restroid: restro.id, tableid: tableDbId },
      include: { table: true },
    });
    emitWaiterCall(req.app.get('io'), restro.id, tableid, tableName);
    res.json(request);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const sendFeedback = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true } });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });

    const { fullname, mobile, email, feedback, dob } = req.body;
    const fb = await prisma.feedback.create({
      data: { restroid: restro.id, fullname, mobile, email, feedback, dob: dob ? new Date(dob) : null },
    });
    res.status(201).json(fb);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { restrootp: true } });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });
    const { otp } = req.body;
    res.json({ valid: otp === restro.restrootp });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
