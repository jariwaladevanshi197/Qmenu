import { prisma } from '../lib/prisma.js';
import QRCode from 'qrcode';
import { Jimp, JimpMime, HorizontalAlign, VerticalAlign } from 'jimp';
import { saveToSupabase } from '../middleware/upload.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import parseBMFontXML from 'parse-bmfont-xml';

const QR_LABEL_FONT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), '../assets/fonts/open-sans-64-black');
const QR_LABEL_FONT_FNT = path.join(QR_LABEL_FONT_DIR, 'open-sans-64-black.fnt');
const QR_LABEL_FONT_PNG = path.join(QR_LABEL_FONT_DIR, 'open-sans-64-black.png');

// Builds a Jimp BmFont object directly from local font files, bypassing
// Jimp's loadFont (which resolves the page PNG via a runtime fs/fetch path
// that Vercel's serverless function tracer doesn't reliably bundle)
async function loadTableLabelFont() {
  const rawFont = parseBMFontXML(fs.readFileSync(QR_LABEL_FONT_FNT, 'utf-8'));
  const pageImg = await Jimp.read(fs.readFileSync(QR_LABEL_FONT_PNG));

  const chars = {};
  for (const c of rawFont.chars) chars[String.fromCharCode(c.id)] = c;

  const kernings = {};
  for (const k of rawFont.kernings) {
    const first = String.fromCharCode(k.first);
    kernings[first] = kernings[first] || {};
    kernings[first][String.fromCharCode(k.second)] = k.amount;
  }

  return { ...rawFont, chars, kernings, pages: [pageImg] };
}

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

export const generateTableQR = async (req, res) => {
  try {
    const table = await prisma.table.findFirst({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    if (!table) return res.status(404).json({ error: 'Table not found' });

    const restro = await prisma.restaurant.findUnique({ where: { id: req.user.id }, select: { slug: true } });
    const menuUrl = `${process.env.CLIENT_URL}/menu/${restro.slug}?table=${table.tableNumber}`;

    // Generate the QR code, then print the table name and scan instruction
    // below it using Jimp's bundled bitmap font (no system fonts needed, works on serverless)
    const qrSize = 400;
    const nameHeight = 90;
    const instructionHeight = 90;
    const totalLabelHeight = nameHeight + instructionHeight;
    const qrBuffer = await QRCode.toBuffer(menuUrl, { width: qrSize, margin: 2 });
    const qrImg = await Jimp.read(qrBuffer);

    const canvas = new Jimp({ width: qrSize, height: qrSize + totalLabelHeight, color: 0xffffffff });
    canvas.composite(qrImg, 0, 0);

    const font = await loadTableLabelFont();
    // Table name
    canvas.print({
      x: 0,
      y: qrSize,
      text: { text: table.name, alignmentX: HorizontalAlign.CENTER, alignmentY: VerticalAlign.MIDDLE },
      maxWidth: qrSize,
      maxHeight: nameHeight,
      font,
    });
    // Scan instruction
    canvas.print({
      x: 0,
      y: qrSize + nameHeight,
      text: { text: 'Scan QR & Order', alignmentX: HorizontalAlign.CENTER, alignmentY: VerticalAlign.MIDDLE },
      maxWidth: qrSize,
      maxHeight: instructionHeight,
      font,
    });

    const finalBuffer = await canvas.getBuffer(JimpMime.png);

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
