import { prisma } from '../lib/prisma.js';
import { serverError } from '../utils/http.js';
import { saveToSupabase } from '../middleware/upload.js';

// â”€â”€ Categories â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: { restroid: req.user.id },
      include: { _count: { select: { menuItems: true } } },
      orderBy: { sortorder: 'asc' },
    });
    res.json(categories);
  } catch (e) {
    serverError(res, e);
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name_eng, name_guj, name_hindi, categorydesc, icon, sortorder } = req.body;
    if (!name_eng) return res.status(400).json({ error: 'English name is required' });
    const imagePath = req.file ? await saveToSupabase(req.file, 'images') : null;
    const cat = await prisma.category.create({
      data: {
        restaurant: { connect: { id: req.user.id } },
        name_eng, name_guj, name_hindi, categorydesc,
        icon: icon || null,
        image: imagePath,
        sortorder: parseInt(sortorder || 0),
      },
    });
    res.status(201).json(cat);
  } catch (e) {
    serverError(res, e);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_eng, name_guj, name_hindi, categorydesc, icon, sortorder } = req.body;
    const data = { name_eng, name_guj, name_hindi, categorydesc, icon: icon || null, sortorder: parseInt(sortorder || 0) };
    if (req.file) data.image = await saveToSupabase(req.file, 'images');

    const cat = await prisma.category.updateMany({
      where: { id: parseInt(id), restroid: req.user.id },
      data,
    });
    res.json(cat);
  } catch (e) {
    serverError(res, e);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await prisma.category.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    serverError(res, e);
  }
};

// A menu item may only point at one of the restaurant's own categories —
// otherwise it would show up on another restaurant's public menu.
const ownsCategory = async (restroid, categoryid) => {
  const id = parseInt(categoryid, 10);
  if (Number.isNaN(id)) return false;
  return !!(await prisma.category.findFirst({ where: { id, restroid }, select: { id: true } }));
};

// â”€â”€ Menu Items â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const getItems = async (req, res) => {
  try {
    const { categoryid } = req.query;
    const where = { restroid: req.user.id };
    if (categoryid) where.categoryid = parseInt(categoryid);
    const items = await prisma.menuItem.findMany({ where, orderBy: { id: 'asc' } });
    res.json(items);
  } catch (e) {
    serverError(res, e);
  }
};

export const createItem = async (req, res) => {
  try {
    const { categoryid, name_eng, name_guj, name_hindi, price, veg, available } = req.body;
    if (!categoryid) return res.status(400).json({ error: 'Category is required' });
    if (!name_eng)   return res.status(400).json({ error: 'English name is required' });
    if (!price || isNaN(parseFloat(price))) return res.status(400).json({ error: 'Valid price is required' });
    if (!(await ownsCategory(req.user.id, categoryid))) return res.status(400).json({ error: 'Invalid category' });

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
    serverError(res, e);
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
    if (!(await ownsCategory(req.user.id, categoryid))) return res.status(400).json({ error: 'Invalid category' });
    if (req.file) data.image = await saveToSupabase(req.file, 'images');

    const { count } = await prisma.menuItem.updateMany({ where: { id: parseInt(id), restroid: req.user.id }, data });
    if (!count) return res.status(404).json({ error: 'Item not found' });
    const item = await prisma.menuItem.findFirst({ where: { id: parseInt(id), restroid: req.user.id } });
    res.json(item);
  } catch (e) {
    serverError(res, e);
  }
};

export const deleteItem = async (req, res) => {
  try {
    await prisma.menuItem.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    serverError(res, e);
  }
};

// â”€â”€ Tables â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const getTables = async (req, res) => {
  try {
    const tables = await prisma.table.findMany({ where: { restroid: req.user.id }, orderBy: { id: 'asc' } });
    res.json(tables);
  } catch (e) {
    serverError(res, e);
  }
};

export const createTable = async (req, res) => {
  try {
    const { name } = req.body;
    // Get next sequential number for this restaurant
    const count = await prisma.table.count({ where: { restroid: req.user.id } });
    const table = await prisma.table.create({ data: { restroid: req.user.id, name, tableNumber: count + 1 } });
    res.status(201).json(table);
  } catch (e) {
    serverError(res, e);
  }
};

export const updateTable = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await prisma.table.updateMany({ where: { id: parseInt(id), restroid: req.user.id }, data: { name } });
    res.json({ success: true });
  } catch (e) {
    serverError(res, e);
  }
};

export const deleteTable = async (req, res) => {
  try {
    await prisma.table.deleteMany({ where: { id: parseInt(req.params.id), restroid: req.user.id } });
    res.json({ success: true });
  } catch (e) {
    serverError(res, e);
  }
};
