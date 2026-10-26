import { Router } from 'express';
import { requireSuperAdmin, requireRestroAdmin, requireOwner, requirePermission } from '../middleware/auth.js';
import { uploadImage, uploadLogo } from '../middleware/upload.js';
import {
  getWebsite, updateWebsite, toggleWebsite,
  uploadBanner, uploadAboutImage, uploadGallery, deleteGalleryImage, getMyWebsite,
} from '../controllers/website.js';

const router = Router();

// Public
router.get('/:slug', getWebsite);

// Super admin
const manageWebsite = [requireSuperAdmin, requirePermission('restaurants', 'manageWebsite')];
router.put('/admin/:id', ...manageWebsite, updateWebsite);
router.patch('/admin/:id/toggle', ...manageWebsite, toggleWebsite);
router.post('/admin/:id/banner', ...manageWebsite, uploadLogo.single('banner'), uploadBanner);
router.post('/admin/:id/about-image', ...manageWebsite, uploadImage.single('image'), uploadAboutImage);
router.post('/admin/:id/gallery', ...manageWebsite, uploadImage.single('image'), uploadGallery);
router.delete('/admin/:id/gallery', ...manageWebsite, deleteGalleryImage);

// Restaurant admin (preview)
router.get('/my/data', requireRestroAdmin, requireOwner, getMyWebsite);

export default router;
