import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

export const generateSlug = async (name) => {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const random = crypto.randomBytes(4).toString('hex');
  const slug = `${base}-${random}`;
  const exists = await prisma.restaurant.findUnique({ where: { slug } });
  if (exists) return generateSlug(name);
  return slug;
};

export const generateOrderCode = () => `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
