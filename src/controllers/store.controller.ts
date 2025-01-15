import { Request, Response, NextFunction } from 'express';
import { StoreService } from '../services';
import { logger } from '../utils/logger';
import { z } from 'zod';

// Schema
const createStoreSchema = z.object({
  storeId: z.string().min(1),
  chatApiKey: z.string().optional(),
  workflowApiKey: z.string().optional(),
  systemPrompt: z.string().optional(),
  storePrompt: z.string().optional(),
  iconUrl: z.string().optional(),
  tone: z.string().optional(),
  blockingKeywords: z.string().optional(),
  datasetId: z.string().optional(),
  chatColor: z.string().optional(),
  faqContent: z.string().optional(),
  metaFieldDescription: z.string().optional(),
});

const getStoreSchema = z.object({
  storeId: z.string().min(1),
});

const getStoresSchema = z.object({
  skip: z.string().optional(),
  limit: z.string().optional(),
});

const updateStoreSchema = z.object({
  storeId: z.string().min(1),
  chatApiKey: z.string().optional(),
  workflowApiKey: z.string().optional(),
  systemPrompt: z.string().optional(),
  storePrompt: z.string().optional(),
  iconUrl: z.string().optional(),
  tone: z.string().optional(),
  blockingKeywords: z.string().optional(),
  datasetId: z.string().optional(),
  chatColor: z.string().optional(),
  faqContent: z.string().optional(),
  metaFieldDescription: z.string().optional(),
});


// Controller
export class StoreController {
  private storeService: StoreService;

  constructor() {
    this.storeService = new StoreService();
  }

  public createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = createStoreSchema.parse(req.body);

      const store = await this.storeService.createStore(validatedData);
      logger.info(`Store created with ID: ${store.id}`);
      res.status(201).json(store);
    } catch (error) {
      logger.error('Error creating store:', error);
      if (error instanceof Error && error.message.includes('required')) {
        return res.status(400).json({ error: error.message });
      }
      res.status(500).json({ error: error });
    }
  };

  public getStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = getStoreSchema.parse(req.params);
      const store = await this.storeService.getStore(validatedData.storeId);
      if (!store) {
        return res.status(404).json({ error: 'Store not found' });
      }
      res.json(store);
    } catch (error) {
      logger.error('Error getting store:', error);
      res.status(500).json({ error: error });
    }
  };

  public getStores = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedData = getStoresSchema.parse(req.query);
      const skip = parseInt(validatedData.skip as string) || 0;
      const limit = parseInt(validatedData.limit as string) || 100;
      const stores = await this.storeService.getStores(skip, limit);
      res.json(stores);
    } catch (error) {
      logger.error('Error getting stores:', error);
      res.status(500).json({ error: error });
    }
  };

  public updateStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const storeId = req.params.storeId;
      if(!storeId){
        return res.status(400).json({ error: 'storeId is required' });
      }
      const validatedData = updateStoreSchema.parse(req.body);
      const store = await this.storeService.updateStore(storeId, validatedData);
      res.json(store);
    } catch (error) {
      logger.error('Error updating store:', error);
      if (error instanceof Error && error.message === 'Store not found') {
        return res.status(404).json({ error: error.message });
      }
      res.status(500).json({ error: error });
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
      res.status(500).json({ error: error });
    }
  };
} 