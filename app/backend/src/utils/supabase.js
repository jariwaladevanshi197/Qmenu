import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

// Public client (anon key) — for reading public data
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Admin client (service role key) — for storage uploads, bypasses RLS
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

/**
 * Upload a file buffer to Supabase Storage.
 * @param {Buffer} buffer  - file content
 * @param {string} bucket  - storage bucket name ('images' | 'logos' | 'pdf' | 'qr')
 * @param {string} filename - destination filename
 * @param {string} mimetype
 * @returns {string} public URL
 */
export const uploadToStorage = async (buffer, bucket, filename, mimetype) => {
  const { error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(filename, buffer, { contentType: mimetype, upsert: true });

  if (error) throw new Error(`Storage upload failed: ${error.message}`);

  const { data } = supabaseAdmin.storage.from(bucket).getPublicUrl(filename);
  return data.publicUrl;
};

/**
 * Delete a file from Supabase Storage.
 */
export const deleteFromStorage = async (bucket, filename) => {
  await supabaseAdmin.storage.from(bucket).remove([filename]);
};
