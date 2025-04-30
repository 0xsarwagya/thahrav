import { PrismaClient } from '@/prisma/client'

/**
 * The PrismaClient instance used to interact with the database.
 *
 * @remarks
 * This client facilitates database operations such as querying, creating, updating,
 * and deleting records. It should be initialized before use and closed appropriately
 * to release database connections.
 */
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    log: ["query", 'error', 'info', 'warn'],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;