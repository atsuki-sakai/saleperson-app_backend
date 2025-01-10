import { Request, Response } from 'express';
import { StoreService } from '../services/store.service';
import { logger } from '../utils/logger';

export class StoreController {
  private storeService: StoreService;

  constructor() {
    this.storeService = new StoreService();
  }

  async createStore(req: Request, res: Response) {
    try {
      const store = await this.storeService.createStore(req.body);
      logger.info(`Store created with ID: ${store.id}`);
      res.status(201).json(store);
    } catch (error) {
      logger.error('Error creating store:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to create store' });
      }
    }
  }

  async getStore(req: Request, res: Response) {
    try {
      const store = await this.storeService.getStore(req.params.storeId);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      res.json(store);
    } catch (error) {
      logger.error('Error getting store:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to get store' });
      }
    }
  }

  async getStores(req: Request, res: Response) {
    try {
      const skip = parseInt(req.query.skip as string) || 0;
      const limit = parseInt(req.query.limit as string) || 100;
      const stores = await this.storeService.getStores(skip, limit);
      res.json(stores);
    } catch (error) {
      logger.error('Error getting stores:', error);
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to get stores' });
      }
    }
  }

  async updateStore(req: Request, res: Response) {
    try {
      const store = await this.storeService.updateStore(req.params.storeId, req.body);
      res.json(store);
    } catch (error) {
      logger.error('Error updating store:', error);
      if (error instanceof Error) {
        if (error.message === 'Store not found') {
          return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to update store' });
      }
    }
  }

  async deleteStore(req: Request, res: Response) {
    try {
        console.log("deleteStore", req.params.storeId);
      await this.storeService.deleteStore(req.params.storeId);
      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting store:', error);
      if (error instanceof Error) {
        if (error.message === 'Store not found') {
          return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to delete store' });
      }
    }
  }
} 