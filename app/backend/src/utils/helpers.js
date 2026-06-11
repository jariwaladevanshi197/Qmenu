import { PrismaClient } from '../generated/client/index.js';
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

// Atomically allocate the next per-restaurant order token (1, 2, 3, ...). Call within a transaction.
export const allocateOrderNumber = async (tx, restroid) => {
  const restro = await tx.restaurant.update({
    where: { id: restroid },
    data: { nextOrderNumber: { increment: 1 } },
    select: { nextOrderNumber: true },
  });
  return restro.nextOrderNumber - 1;
};
