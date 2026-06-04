import multer from 'multer';
import path from 'path';
import { uploadToStorage } from '../utils/supabase.js';

// All files go to memory first, then we push to Supabase Storage
const memStorage = multer.memoryStorage();

const imageFilter = (_req, file, cb) => {
  const allowed = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  cb(null, allowed.includes(path.extname(file.originalname).toLowerCase()));
};

export const uploadImage = multer({ storage: memStorage, fileFilter: imageFilter, limits: { fileSize: 5 * 1024 * 1024 } });
export const uploadPdf   = multer({ storage: memStorage, limits: { fileSize: 20 * 1024 * 1024 } });
export const uploadLogo  = multer({ storage: memStorage, fileFilter: imageFilter, limits: { fileSize: 2 * 1024 * 1024 } });

/**
 * After multer puts the file in req.file.buffer, call this to push it to
 * Supabase Storage and get back a public URL.
 *
 * @param {Express.Multer.File} file  req.file
 * @param {'images'|'logos'|'pdf'|'qr'} bucket
 * @returns {Promise<string>} public URL
 */
export const saveToSupabase = async (file, bucket) => {
  const ext = path.extname(file.originalname);
  const filename = `${bucket}_${Date.now()}${ext}`;
  return uploadToStorage(file.buffer, bucket, filename, file.mimetype);
};
