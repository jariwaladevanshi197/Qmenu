import { PrismaClient } from '../generated/client/index.js';

// Reuse a single PrismaClient across the whole app (and across hot
// reloads / serverless invocations) instead of one per controller —
// each instance opens its own DB connection pool, which exhausts the
// Supabase pooler's connection limit and slows every request.
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.__prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.__prisma = prisma;
