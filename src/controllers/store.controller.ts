import { Request, Response, NextFunction } from 'express';
import { StoreService } from '../services';
import { logger } from '../utils/logger';

export class StoreController {
  private storeService: StoreService;

  constructor() {
    this.storeService = new StoreService();
  }

  public createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.storeId) {
        return res.status(400).json({ error: 'storeId is required' });
      }

      const store = await this.storeService.createStore(req.body);
      logger.info(`Store created with ID: ${store.id}`);
      res.status(201).json(store);
    } catch (error) {
      logger.error('Error creating store:', error);
      if (error instanceof Error && error.message.includes('required')) {
        return res.status(400).json({ error: error.message });
      }
      next(error);
    }
  };

  public getStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store = await this.storeService.getStore(req.params.storeId);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      res.json(store);
    } catch (error) {
      logger.error('Error getting store:', error);
      next(error);
    }
  };

  public getStores = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const skip = parseInt(req.query.skip as string) || 0;
      const limit = parseInt(req.query.limit as string) || 100;
      const stores = await this.storeService.getStores(skip, limit);
      res.json(stores);
    } catch (error) {
      logger.error('Error getting stores:', error);
      next(error);
    }
  };

  public updateStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store = await this.storeService.updateStore(req.params.storeId, req.body);
      res.json(store);
    } catch (error) {
      logger.error('Error updating store:', error);
      if (error instanceof Error && error.message === 'Store not found') {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  };

  public deleteStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.storeService.deleteStore(req.params.storeId);
      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting store:', error);
      if (error instanceof Error && error.message === 'Store not found') {
        return res.status(404).json({ error: error.message });
      }
      next(error);
    }
  };
} 