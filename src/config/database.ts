import { PrismaClient } from '@prisma/client';

// データベース接続設定
const DB_PASSWORD = process.env.DB_PASSWORD;
const PROJECT_ID = process.env.PROJECT_ID;
const DB_NAME = process.env.DB_NAME || 'saleperson-app-db';
const CLOUD_SQL_CONNECTION_NAME = `${PROJECT_ID}:asia-northeast1:saleperson-app-db`;

// Cloud Run環境でのUnixソケット接続文字列
// export const DATABASE_URL = `postgresql://postgres:${DB_PASSWORD}@/${DB_NAME}?host=/cloudsql/${CLOUD_SQL_CONNECTION_NAME}`;
export const DATABASE_URL = `postgresql://postgres:${DB_PASSWORD}@localhost:5432/${DB_NAME}`;

// 設定のエクスポート
export const dbConfig = {
    DATABASE_URL,
    DB_NAME,
    PROJECT_ID,
    CLOUD_SQL_CONNECTION_NAME,
};

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL
    }
  }
});