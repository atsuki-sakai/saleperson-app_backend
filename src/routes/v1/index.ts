import { Router } from 'express';
import { healthRouter } from './health';
import { storeRouter } from './store.routes';

export const v1Router = Router();

v1Router.use('/health', healthRouter);
v1Router.use('/stores', storeRouter); 