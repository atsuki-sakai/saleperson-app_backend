import { PrismaClient } from '@prisma/client';

// データベース接続設定
const DB_USER = process.env.DB_USER || 'postgres';
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME || 'saleperson-app-db';
const CLOUD_SQL_CONNECTION_NAME = process.env.CLOUD_SQL_CONNECTION_NAME;

// 環境に応じた接続文字列を生成
const getDatabaseUrl = () => {
  // 環境変数のログ出力（デバッグ用）
  console.log('Environment variables:', {
    NODE_ENV: process.env.NODE_ENV,
    DB_USER,
    DB_NAME,
    CLOUD_SQL_CONNECTION_NAME,
  });

  if (process.env.NODE_ENV === 'production') {
    // Cloud Run環境での接続文字列（Unix socket）
    const url = `postgresql://${DB_USER}:${DB_PASSWORD}@/${DB_NAME}?host=/cloudsql/${CLOUD_SQL_CONNECTION_NAME}`;
    console.log('Production DATABASE_URL:', url);
    return url;
  } else {
    // ローカル開発環境での接続文字列
    const url = `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_NAME}`;
    console.log('Development DATABASE_URL:', url);
    return url;
  }
};

// Prismaクライアントの設定
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: getDatabaseUrl()
    }
  },
  log: ['query', 'info', 'warn', 'error'],
});