import { Router } from 'express';
import { healthRouter } from './health';
import { storeRouter } from './store.routes';
import { difyRouter } from './dify.routes';

export const router = Router();

router.use('/health', healthRouter);
router.use('/stores', storeRouter);
router.use('/dify', difyRouter); 