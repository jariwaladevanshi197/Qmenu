import { prisma } from '../lib/prisma.js';
import QRCode from 'qrcode';
import sharp from 'sharp';
import { saveToSupabase } from '../middleware/upload.js';

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
    const { restroname, mobileno, email, address, gstno, discount, servicecharge, printNodeApiKey, printNodePrinterId, upiId } = req.body;
    const data = { restroname, mobileno, email, address, gstno, discount: parseFloat(discount || 0), servicecharge: parseFloat(servicecharge || 0) };
    if (printNodeApiKey !== undefined) data.printNodeApiKey = printNodeApiKey || null;
    if (printNodePrinterId !== undefined) data.printNodePrinterId = printNodePrinterId || null;
    if (upiId !== undefined) data.upiId = upiId || null;
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

const escapeXml = (s) => String(s).replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));

export const generateTableQR = async (req, res) => {
  try {
    const table = await prisma.table.findFirst({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    if (!table) return res.status(404).json({ error: 'Table not found' });

    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { slug: true } });
    const menuUrl = `${process.env.CLIENT_URL}/menu/${restro.slug}?table=${table.tableNumber}`;

    // Generate the QR code, then composite the table name below it
    const qrSize = 400;
    const labelHeight = 60;
    const qrBuffer = await QRCode.toBuffer(menuUrl, { width: qrSize, margin: 2 });

    const labelSvg = `<svg width="${qrSize}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="black" text-anchor="middle" dominant-baseline="middle">${escapeXml(table.name)}</text>
    </svg>`;

    const finalBuffer = await sharp({
      create: { width: qrSize, height: qrSize + labelHeight, channels: 3, background: 'white' },
    })
      .composite([
        { input: qrBuffer, top: 0, left: 0 },
        { input: Buffer.from(labelSvg), top: qrSize, left: 0 },
      ])
      .png()
      .toBuffer();

    const filename = `qr_table_${table.id}_${Date.now()}.png`;
    const { uploadToStorage } = await import('../utils/supabase.js');
    const qrPath = await uploadToStorage(finalBuffer, 'qr', filename, 'image/png');

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

export const uploadUpiQr = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });
    const qrPath = await saveToSupabase(req.file, 'qr');
    await prisma.restaurant.update({ where: { id: req.user.id }, data: { upiQrImage: qrPath } });
    res.json({ upiQrImage: qrPath });
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
