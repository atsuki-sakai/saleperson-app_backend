import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { router } from './routes';
import { errorHandler } from './utils/errorHandler';
import { logger } from './utils/logger';

const app = express();

// ミドルウェアの設定
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ルーティング
app.use('/api', router);

// エラーハンドリング
app.use(errorHandler);

// ヘルスチェックエンドポイント
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = parseInt(process.env.PORT || '8080', 10);

// 例: app.ts など
console.log("Effective DATABASE_URL:", process.env.DATABASE_URL);
console.log("Effective JSON DATABASE_URL:", JSON.stringify(process.env.DATABASE_URL));
console.log("Effective PORT:", process.env.PORT);
console.log("Effective NODE_ENV:", process.env.NODE_ENV);
console.log("Effective PROJECT_ID:", process.env.PROJECT_ID);
console.log("Effective DB_NAME:", process.env.DB_NAME);
console.log("Connection Name:", process.env.CLOUD_SQL_CONNECTION_NAME);


// サーバー起動時のエラーハンドリングを追加
const server = app.listen(PORT, '0.0.0.0', () => {
  logger.info(`Server is running on port ${PORT}`);
  logger.info(`Database URL: ${process.env.DATABASE_URL}`);
}).on('error', (err) => {
  logger.error('Failed to start server:', err);
  process.exit(1);
});

// グレースフルシャットダウンの処理
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
});

export default app; 