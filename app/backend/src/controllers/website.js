import { prisma } from '../lib/prisma.js';
import { serverError } from '../utils/http.js';
import { saveToSupabase } from '../middleware/upload.js';

const WEBSITE_FIELDS = {
  id: true, restroname: true, slug: true, email: true, address: true,
  mobileno: true, logo: true, subtype: true, status: true,
  websiteEnabled: true, heroTitle: true, tagline: true, aboutText: true, bannerImage: true, aboutImage: true,
  openingHours: true, phone: true, whatsapp: true, facebookUrl: true,
  instagramUrl: true, galleryImages: true, mapEmbed: true, pdf: true,
  theme: {
    select: {
      id: true, title: true, primaryColor: true, secondaryColor: true,
      accentColor: true, bgColor: true, cardColor: true, textColor: true,
      navBg: true, buttonTextColor: true, fontFamily: true, borderRadius: true, darkMode: true,
    },
  },
};

// ── Public: get website data ─────────────────────────────────────────────────
export const getWebsite = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { slug: req.params.slug },
      select: WEBSITE_FIELDS,
    });

    if (!restro || !restro.status) return res.status(404).json({ error: 'Restaurant not found' });
    if (restro.subtype !== 2) return res.status(403).json({ error: 'Website not available for this plan' });
    if (!restro.websiteEnabled) return res.status(404).json({ error: 'Website not enabled', comingSoon: true, restro: { restroname: restro.restroname, logo: restro.logo } });

    // Fetch menu categories with items for menu preview
    const categories = await prisma.category.findMany({
      where: { restroid: restro.id },
      include: { menuItems: { where: { available: true }, take: 3 } },
      take: 4,
    });

    res.json({ ...restro, categories });
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: update website content ──────────────────────────────────────
export const updateWebsite = async (req, res) => {
  try {
    const { id } = req.params;
    const { heroTitle, tagline, aboutText, openingHours, phone, whatsapp, facebookUrl, instagramUrl, mapEmbed } = req.body;

    const restro = await prisma.restaurant.update({
      where: { id: parseInt(id) },
      data: { heroTitle, tagline, aboutText, openingHours, phone, whatsapp, facebookUrl, instagramUrl, mapEmbed },
      select: WEBSITE_FIELDS,
    });
    res.json(restro);
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: toggle website on/off ───────────────────────────────────────
export const toggleWebsite = async (req, res) => {
  try {
    const current = await prisma.restaurant.findUnique({
      where: { id: parseInt(req.params.id) }, select: { websiteEnabled: true },
    });
    const updated = await prisma.restaurant.update({
      where: { id: parseInt(req.params.id) },
      data: { websiteEnabled: !current.websiteEnabled },
      select: { websiteEnabled: true, slug: true },
    });
    res.json(updated);
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: upload banner ────────────────────────────────────────────────
export const uploadBanner = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const url = await saveToSupabase(req.file, 'logos');
    await prisma.restaurant.update({ where: { id: parseInt(req.params.id) }, data: { bannerImage: url } });
    res.json({ bannerImage: url });
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: upload about image ──────────────────────────────────────────
export const uploadAboutImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const url = await saveToSupabase(req.file, 'images');
    await prisma.restaurant.update({ where: { id: parseInt(req.params.id) }, data: { aboutImage: url } });
    res.json({ aboutImage: url });
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: upload gallery image ────────────────────────────────────────
export const uploadGallery = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    const url = await saveToSupabase(req.file, 'images');
    const restro = await prisma.restaurant.findUnique({ where: { id: parseInt(req.params.id) }, select: { galleryImages: true } });
    const existing = JSON.parse(restro.galleryImages || '[]');
    const updated = [...existing, url];
    await prisma.restaurant.update({ where: { id: parseInt(req.params.id) }, data: { galleryImages: JSON.stringify(updated) } });
    res.json({ galleryImages: updated });
  } catch (e) {
    serverError(res, e);
  }
};

// ── Super admin: delete gallery image ────────────────────────────────────────
export const deleteGalleryImage = async (req, res) => {
  try {
    const { url } = req.body;
    const restro = await prisma.restaurant.findUnique({ where: { id: parseInt(req.params.id) }, select: { galleryImages: true } });
    const existing = JSON.parse(restro.galleryImages || '[]');
    const updated = existing.filter((u) => u !== url);
    await prisma.restaurant.update({ where: { id: parseInt(req.params.id) }, data: { galleryImages: JSON.stringify(updated) } });
    res.json({ galleryImages: updated });
  } catch (e) {
    serverError(res, e);
  }
};

// ── Restaurant admin: get own website data ────────────────────────────────────
export const getMyWebsite = async (req, res) => {
  try {
    const restro = await prisma.restaurant.findUnique({
      where: { id: req.user.id },
      select: WEBSITE_FIELDS,
    });
    res.json(restro);
  } catch (e) {
    serverError(res, e);
  }
};
