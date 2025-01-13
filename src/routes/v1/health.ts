import { Router } from 'express';
import { prisma } from '../../lib/prisma';
import { logger } from '../../utils/logger';
export const healthRouter = Router();

healthRouter.get('/', async (req, res) => {
  try {
    logger.info('Starting health check...');

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
  }
});