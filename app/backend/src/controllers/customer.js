import { PrismaClient } from '@prisma/client';
import { emitNewOrder, emitWaiterCall } from '../socket/index.js';
import { generateOrderCode } from '../utils/helpers.js';

const prisma = new PrismaClient();

export const getRestaurantBySlug = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { slug: req.params.slug },
      select: {
        id: true, restroname: true, slug: true, logo: true, status: true,
        subtype: true, pdf: true, discount: true, servicecharge: true,
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
    const restro = await prisma.restaurant.findUnique({ where: { slug: req.params.slug }, select: { id: true, status: true } });
    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });

    const { tableid, customername, customermob, items } = req.body;
    if (!items?.length) return res.status(400).json({ error: 'No items provided' });

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

    const order = await prisma.order.create({
      data: {
        restroid: restro.id,
        tableid: tableid ? parseInt(tableid) : null,
        ordercode: generateOrderCode(),
        customername,
        customermob,
        status: 'PENDING',
        items: { create: enriched },
      },
      include: { items: true, table: true },
    });

    emitNewOrder(req.app.get('io'), restro.id, order);
    res.status(201).json({ ordercode: order.ordercode });
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

    const { tableid, otp } = req.body;
    if (otp !== restro.restrootp) return res.status(401).json({ error: 'Invalid OTP' });

    const request = await prisma.waiterRequest.create({ data: { restroid: restro.id, tableid: tableid ? parseInt(tableid) : null } });
    emitWaiterCall(req.app.get('io'), restro.id, tableid);
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
