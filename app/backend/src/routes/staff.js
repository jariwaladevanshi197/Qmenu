import { Router } from 'express';
import { requireSuperAdmin, requireRestroAdmin, requirePermission, requireStaffPage } from '../middleware/auth.js';
import {
  getStaffByRestro, createStaff, updateStaff, deleteStaff,
  getMyStaff, createMyStaff, updateMyStaff, deleteMyStaff, staffLogin,
} from '../controllers/staff.js';

const router = Router();

// Staff login (public)
router.post('/login', staffLogin);

// Restaurant admin (or staff with the 'staff' page) manages own staff
const staffPage = requireStaffPage('staff');
router.get('/my', requireRestroAdmin, staffPage, getMyStaff);
router.post('/my', requireRestroAdmin, staffPage, createMyStaff);
router.put('/my/:id', requireRestroAdmin, staffPage, updateMyStaff);
router.delete('/my/:id', requireRestroAdmin, staffPage, deleteMyStaff);

// Super admin manages staff for any restaurant
const editRestaurants = requirePermission('restaurants', 'edit');
router.get('/restro/:restroid', requireSuperAdmin, requirePermission('restaurants', 'view'), getStaffByRestro);
router.post('/', requireSuperAdmin, editRestaurants, createStaff);
router.put('/:id', requireSuperAdmin, editRestaurants, updateStaff);
router.delete('/:id', requireSuperAdmin, editRestaurants, deleteStaff);

export default router;
