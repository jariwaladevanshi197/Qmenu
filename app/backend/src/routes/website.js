import { Router } from 'express';
import { requireSuperAdmin, requireRestroAdmin } from '../middleware/auth.js';
import { uploadImage, uploadLogo } from '../middleware/upload.js';
import {
  getWebsite, updateWebsite, toggleWebsite,
  uploadBanner, uploadAboutImage, uploadGallery, deleteGalleryImage, getMyWebsite,
} from '../controllers/website.js';

const router = Router();

// Public
router.get('/:slug', getWebsite);

// Super admin
router.put('/admin/:id', requireSuperAdmin, updateWebsite);
router.patch('/admin/:id/toggle', requireSuperAdmin, toggleWebsite);
router.post('/admin/:id/banner', requireSuperAdmin, uploadLogo.single('banner'), uploadBanner);
router.post('/admin/:id/about-image', requireSuperAdmin, uploadImage.single('image'), uploadAboutImage);
router.post('/admin/:id/gallery', requireSuperAdmin, uploadImage.single('image'), uploadGallery);
router.delete('/admin/:id/gallery', requireSuperAdmin, deleteGalleryImage);

// Restaurant admin (preview)
router.get('/my/data', requireRestroAdmin, getMyWebsite);

export default router;
