import { Router } from 'express';
import { requireRestroAdmin, requireOwner, requireStaffPage } from '../middleware/auth.js';
import { uploadLogo, uploadPdf, uploadImage } from '../middleware/upload.js';
import {
  getProfile, updateProfile, updateOtp, generateTableQR,
  uploadPdfMenu, uploadUpiQr, getStats,
} from '../controllers/restaurant.js';

const router = Router();

router.use(requireRestroAdmin);

// Every page reads the profile for branding; secrets are stripped for staff.
router.get('/profile', getProfile);
router.put('/profile', requireOwner, uploadLogo.single('logo'), updateProfile);
router.patch('/otp', requireOwner, updateOtp);
router.post('/tables/:id/qr', requireStaffPage('tables'), generateTableQR);
router.post('/pdf', requireOwner, uploadPdf.single('pdf'), uploadPdfMenu);
router.post('/upi-qr', requireOwner, uploadImage.single('qrImage'), uploadUpiQr);
router.get('/stats', requireStaffPage('dashboard'), getStats);

export default router;
