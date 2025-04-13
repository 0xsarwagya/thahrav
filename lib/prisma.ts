import { PrismaClient } from './database/client'

/**
 * The PrismaClient instance used to interact with the database.
 *
 * @remarks
 * This client facilitates database operations such as querying, creating, updating,
 * and deleting records. It should be initialized before use and closed appropriately
 * to release database connections.
 */
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as unknown as { prisma: PrismaClient }).prisma) {
    (global as unknown as { prisma: PrismaClient }).prisma = new PrismaClient();
  }
  prisma = (global as unknown as { prisma: PrismaClient }).prisma;
}

export { prisma };