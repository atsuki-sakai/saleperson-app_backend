// データベース設定の管理
const DB_PASSWORD = process.env.DB_PASSWORD;
const PROJECT_ID = process.env.PROJECT_ID;
const DB_NAME = process.env.DB_NAME || 'saleperson-app-db';
const CLOUD_SQL_CONNECTION_NAME = `${PROJECT_ID}:asia-northeast1:saleperson-app-db`;

const DATABASE_URL = process.env.DATABASE_URL || "";

// データベース設定のエクスポート
export const dbConfig = {
    DATABASE_URL,
    DB_NAME,
    PROJECT_ID,
    CLOUD_SQL_CONNECTION_NAME,
};