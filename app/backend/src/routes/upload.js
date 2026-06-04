import { Router } from 'express';
import { requireRestroAdmin } from '../middleware/auth.js';
import { uploadImage, saveToSupabase } from '../middleware/upload.js';

const router = Router();

router.post('/image', requireRestroAdmin, uploadImage.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  try {
    const url = await saveToSupabase(req.file, 'images');
    res.json({ url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
