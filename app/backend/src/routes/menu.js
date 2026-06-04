import { Router } from 'express';
import { requireRestroAdmin } from '../middleware/auth.js';
import { uploadImage } from '../middleware/upload.js';
import {
  getCategories, createCategory, updateCategory, deleteCategory,
  getItems, createItem, updateItem, deleteItem,
  getTables, createTable, updateTable, deleteTable,
} from '../controllers/menu.js';

const router = Router();

router.use(requireRestroAdmin);

router.get('/categories', getCategories);
router.post('/categories', createCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

router.get('/items', getItems);
router.post('/items', uploadImage.single('image'), createItem);
router.put('/items/:id', uploadImage.single('image'), updateItem);
router.delete('/items/:id', deleteItem);

router.get('/tables', getTables);
router.post('/tables', createTable);
router.put('/tables/:id', updateTable);
router.delete('/tables/:id', deleteTable);

export default router;
