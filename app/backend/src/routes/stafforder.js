import { Router } from 'express';
import { requireRestroAdmin } from '../middleware/auth.js';
import { placeStaffOrder } from '../controllers/stafforder.js';

const router = Router();
router.post('/', requireRestroAdmin, placeStaffOrder);
export default router;
