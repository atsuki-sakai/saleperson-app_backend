import { Router } from 'express';
import { prisma } from '../../lib/prisma';
import { logger } from '../../utils/logger';

export const healthRouter = Router();

healthRouter.get('/', async (req, res) => {
  try {
    logger.info('Starting health check...');
    
    // データベース接続チェック
    logger.info('Checking database connection...');
    const dbCheck = await prisma.$queryRaw`SELECT NOW()`;
    logger.info('Database query successful:', { result: dbCheck });
    
    // Prismaのコネクション状態チェック
    logger.info('Checking Prisma connection...');
    await prisma.$connect();
    logger.info('Prisma connection successful');
    
    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    logger.error('Health check failed:', error);
    res.status(503).json({
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
  } finally {
    try {
      // 明示的に接続を解放
      await prisma.$disconnect();
      logger.info('Database connection closed');
    } catch (disconnectError) {
      logger.error('Error disconnecting from database:', disconnectError);
    }
  }
});