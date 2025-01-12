import request from 'supertest';
import app from '../../app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('StoreController', () => {
  const testStore = {
    storeId: 'test-store-1',
    chatApiKey: null,
    workflowApiKey: null,
    systemPrompt: null,
    storePrompt: null,
    iconUrl: null,
    tone: null,
    blockingKeywords: null,
    datasetId: null,
    chatColor: null,
    faqContent: null,
    metaFieldDescription: null
  };

  beforeEach(async () => {
    await prisma.store.deleteMany();
  });

  describe('POST /', () => {
    it('should create a new store', async () => {
      const response = await request(app)
        .post('/api/v1/stores')
        .send(testStore);

      expect(response.status).toBe(201);
      expect(response.body.storeId).toBe(testStore.storeId);
    });

    it('should return 400 if required fields are missing', async () => {
      const response = await request(app)
        .post('/api/v1/stores')
        .send({});

      expect(response.status).toBe(400);
    });
  });

  describe('GET /:storeId', () => {
    it('should return a store by id', async () => {
      // First create a store
      const store = await prisma.store.create({
        data: testStore
      });

      const response = await request(app)
        .get(`/api/v1/stores/${store.id}`);

      expect(response.status).toBe(200);
      expect(response.body.id).toBe(store.id);
      expect(response.body.storeId).toBe(testStore.storeId);
    });

    it('should return 404 for non-existent store', async () => {
      const response = await request(app)
        .get('/api/v1/stores/999999');

      expect(response.status).toBe(404);
    });
  });

  describe('GET /', () => {
    it('should return a list of stores', async () => {
      // Create test stores
      await prisma.store.createMany({
        data: [
          testStore,
          { ...testStore, storeId: 'test-store-2' }
        ]
      });

      const response = await request(app)
        .get('/api/v1/stores');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(2);
    });

    it('should handle pagination', async () => {
      const response = await request(app)
        .get('/api/v1/stores?skip=0&limit=10');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
}); 