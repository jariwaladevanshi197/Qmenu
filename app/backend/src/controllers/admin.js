import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/client/index.js';
import { generateSlug } from '../utils/helpers.js';
import { saveToSupabase } from '../middleware/upload.js';

const prisma = new PrismaClient();

export const getDashboardStats = async (_req, res) => {
  try {
    const [total, active, expiringSoon, totalRevenue] = await Promise.all([
      prisma.restaurant.count(),
      prisma.restaurant.count({ where: { status: 1 } }),
      prisma.restaurant.count({ where: { expdate: { lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }, status: 1 } }),
      prisma.paymentHistory.aggregate({ _sum: { price: true } }),
    ]);
    res.json({ total, active, inactive: total - active, expiringSoon, totalRevenue: totalRevenue._sum.price || 0 });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getRestaurants = async (req, res) => {
  try {
    const { search, subtype } = req.query;
    const where = {};
    if (search) where.restroname = { contains: search };
    if (subtype !== undefined && subtype !== '') where.subtype = parseInt(subtype);

    const restaurants = await prisma.restaurant.findMany({
      where,
      include: { theme: { select: { title: true } } },
      orderBy: { id: 'desc' },
    });
    res.json(restaurants);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createRestaurant = async (req, res) => {
  try {
    const { restroname, mobileno, email, address, password, gstno, subtype, subplan, price, themecode, latitude, longitude, distance, maxStaff } = req.body;

    const slug = await generateSlug(restroname);
    const hashed = await bcrypt.hash(password, 10);
    const expdate = new Date();
    expdate.setMonth(expdate.getMonth() + parseInt(subplan || 1));

    const logoPath = req.file ? await saveToSupabase(req.file, 'logos') : null;

    const restro = await prisma.restaurant.create({
      data: {
        restroname, mobileno, email, address,
        password: hashed, gstno, subtype: parseInt(subtype || 0),
        subplan: parseInt(subplan || 1), price: parseInt(price || 0),
        themecode: parseInt(themecode) || null,
        latitude, longitude, distance,
        expdate, logo: logoPath, slug,
        restrootp: Math.floor(1000 + Math.random() * 9000).toString(),
        maxStaff: parseInt(maxStaff || 5),
      },
    });

    await prisma.paymentHistory.create({
      data: {
        restroid: restro.id,
        paymentdate: new Date(),
        subplan: parseInt(subplan || 1),
        price: parseInt(price || 0),
        subtype: parseInt(subtype || 0),
        expdate,
      },
    });

    res.status(201).json(restro);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { restroname, mobileno, email, address, gstno, subtype, themecode, latitude, longitude, distance, maxStaff } = req.body;
    const data = { restroname, mobileno, email, address, gstno, subtype: parseInt(subtype), themecode: parseInt(themecode) || null, latitude, longitude, distance, maxStaff: parseInt(maxStaff || 5) };
    if (req.file) data.logo = await saveToSupabase(req.file, 'logos');

    const restro = await prisma.restaurant.update({ where: { id: parseInt(id) }, data });
    res.json(restro);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const toggleStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const current = await prisma.restaurant.findUnique({ where: { id: parseInt(id) }, select: { status: true } });
    const updated = await prisma.restaurant.update({ where: { id: parseInt(id) }, data: { status: current.status === 1 ? 0 : 1 } });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await prisma.restaurant.update({ where: { id: parseInt(id) }, data: { password: hashed } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updatePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const { subplan, price, subtype, paymentdate, expdate } = req.body;

    const updated = await prisma.restaurant.update({
      where: { id: parseInt(id) },
      data: { subplan: parseInt(subplan), price: parseInt(price), subtype: parseInt(subtype), paymentdate: new Date(paymentdate), expdate: new Date(expdate) },
    });

    await prisma.paymentHistory.create({
      data: {
        restroid: parseInt(id),
        paymentdate: new Date(paymentdate),
        subplan: parseInt(subplan),
        price: parseInt(price),
        subtype: parseInt(subtype),
        expdate: new Date(expdate),
      },
    });

    res.json(updated);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getPayments = async (req, res) => {
  try {
    const payments = await prisma.paymentHistory.findMany({
      include: { restaurant: { select: { restroname: true } } },
      orderBy: { paymentdate: 'desc' },
    });
    res.json(payments);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getThemes = async (_req, res) => {
  try {
    const themes = await prisma.theme.findMany();
    res.json(themes);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const themeFields = (body) => ({
  title:           body.title,
  primaryColor:    body.primaryColor    || '#f97316',
  secondaryColor:  body.secondaryColor  || '#1f2937',
  accentColor:     body.accentColor     || '#fbbf24',
  bgColor:         body.bgColor         || '#f9fafb',
  cardColor:       body.cardColor       || '#ffffff',
  textColor:       body.textColor       || '#111827',
  navBg:           body.navBg           || '#ffffff',
  buttonTextColor: body.buttonTextColor || '#ffffff',
  fontFamily:      body.fontFamily      || 'Inter',
  borderRadius:    body.borderRadius    || 'rounded',
  darkMode:        body.darkMode === 'true' || body.darkMode === true,
});

export const createTheme = async (req, res) => {
  try {
    const theme = await prisma.theme.create({ data: themeFields(req.body) });
    res.status(201).json(theme);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateTheme = async (req, res) => {
  try {
    const theme = await prisma.theme.update({
      where: { id: parseInt(req.params.id) },
      data: themeFields(req.body),
    });
    res.json(theme);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteTheme = async (req, res) => {
  try {
    await prisma.theme.delete({ where: { id: parseInt(req.params.id) } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
