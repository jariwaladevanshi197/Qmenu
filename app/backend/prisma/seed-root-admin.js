import { PrismaClient } from '../src/generated/client/index.js';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.admin.updateMany({
    data: { role: 'super_admin', isRoot: true, isActive: true, permissions: null },
  });
  console.log(`Updated ${result.count} admin(s) to root super_admin`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
