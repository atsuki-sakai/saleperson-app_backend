import { PrismaClient } from '@prisma/client';

// PrismaClientをグローバルに保持するための型定義
declare global {
  var prisma: PrismaClient | undefined;
}

// 開発環境でホットリロード時に複数のインスタンスが作成されるのを防ぐ
export const prisma = global.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  },
  log: ['error', 'warn']
});

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

