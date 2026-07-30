import { prisma } from '../lib/prisma.js';
import { serverError } from '../utils/http.js';
import { emitNewOrder, emitWaiterCall } from '../utils/realtime.js';
import { generateOrderCode, allocateOrderNumber } from '../utils/helpers.js';
import { printKitchenOrder } from '../utils/printOrder.js';

export const getRestaurantBySlug = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { slug: req.params.slug },
      select: {
        id: true, restroname: true, slug: true, logo: true, status: true,
        subtype: true, pdf: true, discount: true, servicecharge: true, upiId: true, upiQrImage: true,
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
    serverError(res, e);
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
    serverError(res, e);
  }
};

export const placeOrder = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true, status: true, printNodeApiKey: true, printNodePrinterId: true, discount: true, servicecharge: true } });
    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });

    const { tableid, customername, customermob, items, paymentmethod, utrnumber } = req.body;
    if (!customername?.trim()) return res.status(400).json({ error: 'Name is required' });
    if (!customermob?.trim() || !/^\d{10}$/.test(customermob.trim())) return res.status(400).json({ error: 'A valid 10-digit mobile number is required' });
    if (!Array.isArray(items) || !items.length) return res.status(400).json({ error: 'No items provided' });
    // Validate every line item: known id + a sane positive integer quantity.
    for (const i of items) {
      const qty = Number(i?.quantity);
      if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
        return res.status(400).json({ error: 'Invalid item quantity.' });
      }
    }
    // tableid from QR = tableNumber (restaurant-specific). Must provide a valid table.
    const tableNumber = parseInt(tableid, 10);
    if (!tableid || Number.isNaN(tableNumber)) return res.status(400).json({ error: 'Table QR is required to place an order. Please scan your table QR code.' });

    // UPI is customer-declared only. The UTR (if given) is stored as a reference the
    // staff can reconcile against their bank statement — it is NOT proof of payment.
    // Orders are ALWAYS created UNPAID; only staff (mark-paid) can flip to PAID.
    let utr = null;
    if (paymentmethod === 'UPI' && utrnumber?.trim()) {
      utr = utrnumber.trim();
      // Bank UTR/RRN is a 12-digit numeric reference; reject obvious junk.
      if (!/^\d{12}$/.test(utr)) return res.status(400).json({ error: 'UTR must be a 12-digit number.' });
    }

    // Resolve tableNumber → actual table DB id
    const table = await prisma.table.findFirst({ where: { tableNumber, restroid: restro.id } });
    if (!table) return res.status(400).json({ error: 'Invalid table. Please scan your table QR code.' });

    const menuItems = await prisma.menuItem.findMany({ where: { id: { in: items.map((i) => i.menuitemid) }, restroid: restro.id } });

    const missing = items.find((i) => !menuItems.some((m) => m.id === i.menuitemid));
    if (missing) return res.status(400).json({ error: 'One or more items are no longer available.' });

    const enriched = items.map((i) => {
      const mi = menuItems.find((m) => m.id === i.menuitemid);
      const totalprice = mi.price * i.quantity;
      return {
        menuitemid: mi.id, name_eng: mi.name_eng, name_guj: mi.name_guj,
        name_hindi: mi.name_hindi, price: mi.price, quantity: i.quantity, totalprice,
      };
    });

    // Round money to 2 decimals to avoid float drift being persisted (amounts are Float in DB).
    const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
    const subtotal = round2(enriched.reduce((s, i) => s + i.totalprice, 0));
    const discountAmt = round2(restro.discount ? (subtotal * restro.discount) / 100 : 0);
    const scAmt = round2(restro.servicecharge ? ((subtotal - discountAmt) * restro.servicecharge) / 100 : 0);
    const grandtotal = round2(subtotal - discountAmt + scAmt);

    const order = await prisma.$transaction(async (tx) => {
      const orderNumber = await allocateOrderNumber(tx, restro.id);
      return tx.order.create({
        data: {
          restroid: restro.id,
          tableid: table.id,
          ordercode: generateOrderCode(),
          orderNumber,
          customername,
          customermob,
          status: 'PENDING',
          subtotal,
          discount: discountAmt,
          servicecharge: scAmt,
          grandtotal,
          paymentmethod: paymentmethod === 'UPI' ? 'UPI' : 'COUNTER',
          paymentstatus: 'UNPAID', // never trust the client; staff confirm via mark-paid
          utrnumber: utr,
          items: { create: enriched },
        },
        include: { items: true, table: true },
      });
    });

    emitNewOrder(req.app.get('io'), restro.id, order);
    printKitchenOrder(order, restro); // fire-and-forget — does not block response
    res.status(201).json({ ordercode: order.ordercode });
  } catch (e) {
    serverError(res, e);
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
      select: { ordercode: true, orderNumber: true, tablename: true, timestamp: true },
      orderBy: { timestamp: 'desc' },
      take: 20,
    });
    res.json(orders);
  } catch (e) {
    serverError(res, e);
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
    serverError(res, e);
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
    serverError(res, e);
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
    serverError(res, e);
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { restrootp: true } });
    if (!restro) return res.status(404).json({ error: 'Restaurant not found' });
    const { otp } = req.body;
    res.json({ valid: otp === restro.restrootp });
  } catch (e) {
    serverError(res, e);
  }
};
