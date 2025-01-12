import { PrismaClient } from '@prisma/client';

// Global test timeout
jest.setTimeout(30000);

// Reset database before each test
const prisma = new PrismaClient();

beforeEach(async () => {
  // Add any database cleanup or setup here
  // Example:
  // await prisma.store.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
}); 