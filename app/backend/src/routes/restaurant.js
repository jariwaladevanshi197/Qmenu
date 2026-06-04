import { Router } from 'express';
import { requireRestroAdmin } from '../middleware/auth.js';
import { uploadLogo, uploadPdf } from '../middleware/upload.js';
import {
  getProfile, updateProfile, updateOtp, generateTableQR,
  uploadPdfMenu, getStats,
} from '../controllers/restaurant.js';

const router = Router();

router.use(requireRestroAdmin);

router.get('/profile', getProfile);
router.put('/profile', uploadLogo.single('logo'), updateProfile);
router.patch('/otp', updateOtp);
router.post('/tables/:id/qr', generateTableQR);
router.post('/pdf', uploadPdf.single('pdf'), uploadPdfMenu);
router.get('/stats', getStats);

export default router;
