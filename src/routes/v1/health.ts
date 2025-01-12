import { Router } from 'express';
import { prisma } from '../../lib/prisma';
import { logger } from '../../utils/logger';
import { orderToSegments } from '../../lib/data-clensing';
import { convertOrdersToText } from '../../lib/data-clensing';
import { orderSampleData } from '../../lib/data-clensing';
import { Order } from '../../services/store/types';
export const healthRouter = Router();

healthRouter.get('/', async (req, res) => {
  try {
    logger.info('Starting health check...');

    const orderDataObject = JSON.parse(orderSampleData);
    const orderData = orderDataObject.data.orders.edges.map((edge: any) => edge.node) as Order[];
    const orderText = convertOrdersToText(orderData);
    console.log("orderText", orderText);
    const segments = orderToSegments(orderText);

    console.log("segments", segments);

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