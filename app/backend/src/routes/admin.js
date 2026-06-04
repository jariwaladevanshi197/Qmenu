import { Router } from 'express';
import { requireSuperAdmin } from '../middleware/auth.js';
import { uploadLogo } from '../middleware/upload.js';
import {
  getRestaurants, createRestaurant, updateRestaurant, toggleStatus,
  updatePassword, updatePlan, getPayments, getThemes, createTheme,
  updateTheme, deleteTheme, getDashboardStats,
} from '../controllers/admin.js';

const router = Router();

router.use(requireSuperAdmin);

router.get('/stats', getDashboardStats);
router.get('/restaurants', getRestaurants);
router.post('/restaurants', uploadLogo.single('logo'), createRestaurant);
router.put('/restaurants/:id', uploadLogo.single('logo'), updateRestaurant);
router.patch('/restaurants/:id/status', toggleStatus);
router.patch('/restaurants/:id/password', updatePassword);
router.patch('/restaurants/:id/plan', updatePlan);
router.get('/payments', getPayments);

router.get('/themes', getThemes);
router.post('/themes', createTheme);
router.put('/themes/:id', updateTheme);
router.delete('/themes/:id', deleteTheme);

export default router;
