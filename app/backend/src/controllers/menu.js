import { PrismaClient } from '@prisma/client';
import { saveToSupabase } from '../middleware/upload.js';

const prisma = new PrismaClient();

// ── Categories ──────────────────────────────────────────────────────────────

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: { restroid: req.user.id },
      include: { _count: { select: { menuItems: true } } },
      orderBy: { sortorder: 'asc' },
    });
    res.json(categories);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name_eng, name_guj, name_hindi, categorydesc, sortorder } = req.body;
    if (!name_eng) return res.status(400).json({ error: 'English name is required' });
    const cat = await prisma.category.create({
      data: {
        restaurant: { connect: { id: req.user.id } },
        name_eng, name_guj, name_hindi, categorydesc,
        sortorder: parseInt(sortorder || 0),
      },
    });
    res.status(201).json(cat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_eng, name_guj, name_hindi, categorydesc, sortorder } = req.body;
    const cat = await prisma.category.updateMany({
      where: { id: parseInt(id), restroid: req.user.id },
      data: { name_eng, name_guj, name_hindi, categorydesc, sortorder: parseInt(sortorder || 0) },
    });
    res.json(cat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await prisma.category.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// ── Menu Items ───────────────────────────────────────────────────────────────

export const getItems = async (req, res) => {
  try {
    const { categoryid } = req.query;
    const where = { restroid: req.user.id };
    if (categoryid) where.categoryid = parseInt(categoryid);
    const items = await prisma.menuItem.findMany({ where, orderBy: { id: 'asc' } });
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createItem = async (req, res) => {
  try {
    const { categoryid, name_eng, name_guj, name_hindi, price, veg, available } = req.body;
    if (!categoryid) return res.status(400).json({ error: 'Category is required' });
    if (!name_eng)   return res.status(400).json({ error: 'English name is required' });
    if (!price || isNaN(parseFloat(price))) return res.status(400).json({ error: 'Valid price is required' });

    const imagePath = req.file ? await saveToSupabase(req.file, 'images') : null;
    const item = await prisma.menuItem.create({
      data: {
        restaurant: { connect: { id: req.user.id } },
        category:   { connect: { id: parseInt(categoryid) } },
        name_eng, name_guj, name_hindi,
        price: parseFloat(price),
        veg: veg === 'true' || veg === true,
        available: available !== 'false' && available !== false,
        image: imagePath,
      },
    });
    res.status(201).json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_eng, name_guj, name_hindi, price, veg, available, categoryid } = req.body;
    const data = {
      name_eng, name_guj, name_hindi,
      price: parseFloat(price),
      veg: veg === 'true' || veg === true,
      available: available !== 'false' && available !== false,
      categoryid: parseInt(categoryid),
    };
    if (req.file) data.image = await saveToSupabase(req.file, 'images');

    await prisma.menuItem.updateMany({ where: { id: parseInt(id), restroid: req.user.id }, data });
    const item = await prisma.menuItem.findUnique({ where: { id: parseInt(id) } });
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    await prisma.menuItem.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// ── Tables ───────────────────────────────────────────────────────────────────

export const getTables = async (req, res) => {
  try {
    const tables = await prisma.table.findMany({ where: { restroid: req.user.id }, orderBy: { id: 'asc' } });
    res.json(tables);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const createTable = async (req, res) => {
  try {
    const { name } = req.body;
    const table = await prisma.table.create({ data: { restroid: req.user.id, name } });
    res.status(201).json(table);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const updateTable = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await prisma.table.updateMany({ where: { id: parseInt(id), restroid: req.user.id }, data: { name } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteTable = async (req, res) => {
  try {
    await prisma.table.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
