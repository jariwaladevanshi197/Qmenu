import { Router } from 'express';
import { requireRestroAdmin, requireStaffPage } from '../middleware/auth.js';
import { placeStaffOrder } from '../controllers/stafforder.js';

const router = Router();
router.post('/', requireRestroAdmin, requireStaffPage('orders'), placeStaffOrder);
export default router;
