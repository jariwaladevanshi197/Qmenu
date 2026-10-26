import { Router } from 'express';
import { requireRestroAdmin, requireStaffPage } from '../middleware/auth.js';
import { uploadImage } from '../middleware/upload.js';
import {
  getCategories, createCategory, updateCategory, deleteCategory,
  getItems, createItem, updateItem, deleteItem,
  getTables, createTable, updateTable, deleteTable,
} from '../controllers/menu.js';

const router = Router();

router.use(requireRestroAdmin);

const menu = requireStaffPage('menu');
const tables = requireStaffPage('tables');

router.get('/categories', menu, getCategories);
router.post('/categories', menu, uploadImage.single('image'), createCategory);
router.put('/categories/:id', menu, uploadImage.single('image'), updateCategory);
router.delete('/categories/:id', menu, deleteCategory);

// Live Orders reads items + tables to let staff place manual orders.
router.get('/items', requireStaffPage('menu', 'orders'), getItems);
router.post('/items', menu, uploadImage.single('image'), createItem);
router.put('/items/:id', menu, uploadImage.single('image'), updateItem);
router.delete('/items/:id', menu, deleteItem);

router.get('/tables', requireStaffPage('tables', 'orders'), getTables);
router.post('/tables', tables, createTable);
router.put('/tables/:id', tables, updateTable);
router.delete('/tables/:id', tables, deleteTable);

export default router;
