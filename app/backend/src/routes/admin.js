import { Router } from 'express';
import { requireSuperAdmin, requirePermission } from '../middleware/auth.js';
import { uploadLogo } from '../middleware/upload.js';
import {
  getRestaurants, createRestaurant, updateRestaurant, toggleStatus,
  updatePassword, updatePlan, getPayments, getThemes, createTheme,
  updateTheme, deleteTheme, getDashboardStats,
} from '../controllers/admin.js';
import { getAdmins, createAdmin, updateAdmin, deleteAdmin } from '../controllers/adminUsers.js';

const router = Router();

router.use(requireSuperAdmin);

router.get('/stats',                      requirePermission('dashboard', 'view'),           getDashboardStats);
router.get('/restaurants',                requirePermission('restaurants', 'view'),          getRestaurants);
router.post('/restaurants',               requirePermission('restaurants', 'create'),        uploadLogo.single('logo'), createRestaurant);
router.put('/restaurants/:id',            requirePermission('restaurants', 'edit'),          uploadLogo.single('logo'), updateRestaurant);
router.patch('/restaurants/:id/status',   requirePermission('restaurants', 'toggleStatus'), toggleStatus);
router.patch('/restaurants/:id/password', requirePermission('restaurants', 'resetPassword'), updatePassword);
router.patch('/restaurants/:id/plan',     requirePermission('restaurants', 'managePlan'),   updatePlan);
router.get('/payments',                   requirePermission('payments', 'view'),             getPayments);

router.get('/themes',                     requirePermission('themes', 'view'),               getThemes);
router.post('/themes',                    requirePermission('themes', 'create'),             createTheme);
router.put('/themes/:id',                 requirePermission('themes', 'edit'),               updateTheme);
router.delete('/themes/:id',              requirePermission('themes', 'delete'),             deleteTheme);

router.get('/admins',                     requirePermission('admins', 'view'),               getAdmins);
router.post('/admins',                    requirePermission('admins', 'create'),             createAdmin);
router.put('/admins/:id',                 requirePermission('admins', 'edit'),               updateAdmin);
router.delete('/admins/:id',              requirePermission('admins', 'delete'),             deleteAdmin);

export default router;
