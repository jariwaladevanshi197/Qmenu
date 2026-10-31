import { prisma } from '../lib/prisma.js';
import crypto from 'crypto';

export const generateSlug = async (name) => {
  const base = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const random = crypto.randomBytes(4).toString('hex');
  const slug = `${base}-${random}`;
  const exists = await prisma.restaurant.findUnique({ where: { slug } });
  if (exists) return generateSlug(name);
  return slug;
};

export const generateOrderCode = () => `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

// Atomically allocate the next per-restaurant order token (1, 2, 3, ...). Call within a transaction.
export const allocateOrderNumber = async (tx, restroid) => {
  const restro = await tx.restaurant.update({
    where: { id: restroid },
    data: { nextOrderNumber: { increment: 1 } },
    select: { nextOrderNumber: true },
  });
  return restro.nextOrderNumber - 1;
};

// Strip secrets from a restaurant row before it leaves the server. The owner
// keeps their own PrintNode key and OTP (shown in Settings); everyone else —
// staff and platform admins — never sees them. The password hash never leaves.
export const safeRestaurant = (restro, { owner = false } = {}) => {
  if (!restro) return restro;
  const { password: _pw, ...rest } = restro;
  if (owner) return rest;
  const { printNodeApiKey: _key, restrootp: _otp, ...publicFields } = rest;
  return publicFields;
};
