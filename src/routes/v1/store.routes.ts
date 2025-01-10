import { Router } from 'express';
import { StoreController } from '../../controllers/store.controller';

export const storeRouter = Router();
const storeController = new StoreController();

// CRUD操作のルート
storeRouter.get('/', storeController.getStores);
storeRouter.post('/', storeController.createStore);
storeRouter.get('/:storeId', storeController.getStore);
storeRouter.put('/:storeId', storeController.updateStore);
storeRouter.delete('/:storeId', storeController.deleteStore); 