import { Router } from 'express';
import { requireSuperAdmin, requireRestroAdmin } from '../middleware/auth.js';
import { getStaffByRestro, createStaff, updateStaff, deleteStaff, getMyStaff, createMyStaff, updateMyStaff, staffLogin } from '../controllers/staff.js';

const router = Router();

// Staff login (public)
router.post('/login', staffLogin);

// Super admin manages staff for any restaurant
router.get('/restro/:restroid', requireSuperAdmin, getStaffByRestro);
router.post('/', requireSuperAdmin, createStaff);
router.put('/:id', requireSuperAdmin, updateStaff);
router.delete('/:id', requireSuperAdmin, deleteStaff);

// Restaurant admin manages own staff
router.get('/my', requireRestroAdmin, getMyStaff);
router.post('/my', requireRestroAdmin, createMyStaff);
router.put('/my/:id', requireRestroAdmin, updateMyStaff);

export default router;
