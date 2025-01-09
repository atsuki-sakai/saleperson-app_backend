import { Router } from 'express';
import { StoreController } from '../../controllers/store.controller';

const router = Router();
const storeController = new StoreController();

// CRUD操作のルート
router.get('/', (req, res) => storeController.getStores(req, res));
router.post('/', (req, res) => storeController.createStore(req, res));
router.get('/:storeId', (req, res) => storeController.getStore(req, res));
router.put('/:storeId', (req, res) => storeController.updateStore(req, res));
router.delete('/:storeId', (req, res) => storeController.deleteStore(req, res));

export { router as storeRouter }; 