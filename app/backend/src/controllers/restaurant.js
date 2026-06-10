import { PrismaClient } from '../generated/client/index.js';
import QRCode from 'qrcode';
import { saveToSupabase } from '../middleware/upload.js';

const prisma = new PrismaClient();

export const getProfile = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { id: req.user.id },
      include: {
        theme: {
          select: {
            id: true, title: true,
            primaryColor: true, secondaryColor: true, accentColor: true,
            bgColor: true, cardColor: true, textColor: true,
            navBg: true, buttonTextColor: true,
            fontFamily: true, borderRadius: true, darkMode: true,
          },
        },
      },
    });
    const { password: _pw, ...safe } = restro;
    res.json(safe);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { restroname, mobileno, email, address, gstno, discount, servicecharge, printNodeApiKey, printNodePrinterId } = req.body;
    const data = { restroname, mobileno, email, address, gstno, discount: parseFloat(discount || 0), servicecharge: parseFloat(servicecharge || 0) };
    if (printNodeApiKey !== undefined) data.printNodeApiKey = printNodeApiKey || null;
    if (printNodePrinterId !== undefined) data.printNodePrinterId = printNodePrinterId || null;
    if (req.file) data.logo = await saveToSupabase(req.file, 'logos');

    const restro = await prisma.restaurant.update({ where: { id: req.user.id }, data });
    res.json(restro);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateOtp = async (req, res) => {
  try {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    await prisma.restaurant.update({ where: { id: req.user.id }, data: { restrootp: otp } });
    res.json({ otp });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const generateTableQR = async (req, res) => {
  try {
    const table = await prisma.table.findFirst({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    if (!table) return res.status(404).json({ error: 'Table not found' });

    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { slug: true } });
    const menuUrl = `${process.env.CLIENT_URL}/menu/${restro.slug}?table=${table.tableNumber}`;

    // Generate QR as a Buffer and upload directly to Supabase Storage
    const qrBuffer = await QRCode.toBuffer(menuUrl, { width: 400, margin: 2 });
    const filename = `qr_table_${table.id}_${Date.now()}.png`;
    const { uploadToStorage } = await import('../utils/supabase.js');
    const qrPath = await uploadToStorage(qrBuffer, 'qr', filename, 'image/png');

    await prisma.table.update({ where: { id: table.id }, data: { qrimage: qrPath } });
    res.json({ qrimage: qrPath, url: menuUrl });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const uploadPdfMenu = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No PDF uploaded' });
    const pdfPath = await saveToSupabase(req.file, 'pdf');
    await prisma.restaurant.update({ where: { id: req.user.id }, data: { pdf: pdfPath } });
    res.json({ pdf: pdfPath });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const getStats = async (req, res) => {
  try {
    const rid = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [totalOrders, todayOrders, totalRevenue, pendingOrders, categories, items, tables, feedback, waiterRequests] = await Promise.all([
      prisma.orderHistory.count({ where: { restroid: rid } }),
      prisma.orderHistory.count({ where: { restroid: rid, timestamp: { gte: today } } }),
      prisma.orderHistory.aggregate({ where: { restroid: rid }, _sum: { grandtotal: true } }),
      prisma.order.count({ where: { restroid: rid, status: 'PENDING' } }),
      prisma.category.count({ where: { restroid: rid } }),
      prisma.menuItem.count({ where: { restroid: rid } }),
      prisma.table.count({ where: { restroid: rid } }),
      prisma.feedback.count({ where: { restroid: rid } }),
      prisma.waiterRequest.count({ where: { restroid: rid, status: 0 } }),
    ]);

    res.json({ totalOrders, todayOrders, totalRevenue: totalRevenue._sum.grandtotal || 0, pendingOrders, categories, items, tables, feedback, waiterRequests });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
