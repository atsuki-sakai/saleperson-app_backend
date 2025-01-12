import { prisma } from '../../lib/prisma';
import { Store, Document, Prisma } from '@prisma/client';
import { logger } from '../../utils/logger';

export class StoreService {
  async getStore(storeId: string): Promise<Store | null> {
    try {
      const store = await prisma.store.findUnique({
        where: { storeId }
      });
      return store;
    } catch (error) {
      logger.error('Database error in getStore:', error);
      throw new Error('Failed to fetch store from database');
    }
  }

  async getStores(skip = 0, limit = 100): Promise<Store[]> {
    try {
      return await prisma.store.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      });
    } catch (error) {
      console.log("Error fetching stores:", error);
      logger.error('Database error in getStores:', error);
      throw new Error('Failed to fetch stores');
    }
  }

  async createStore(data: Prisma.StoreCreateInput): Promise<Store> {
    try {
      const store = await prisma.store.create({
        data,
        include: { documents: true }
      });
      return store;
    } catch (error) {
      logger.error('Database error in createStore:', error);
      throw new Error('Failed to create store in database');
    }
  }

  async getStoreDocuments(storeId: string): Promise<Document[]> {
    try {
      const store = await prisma.store.findUnique({
        where: { storeId },
        include: { documents: true }
      });
      if (!store) {
        throw new Error('Store not found');
      }
      return store.documents;
    } catch (error) {
      logger.error('Database error in getStoreDocuments:', error);
      throw new Error('Failed to fetch store documents');
    }
  }

  async updateStore(storeId: string, data: Partial<Prisma.StoreUpdateInput>): Promise<Store> {
    try {
      const store = await prisma.store.update({
        where: { storeId },
        data,
        include: { documents: true }
      });
      return store;
    } catch (error) {
      logger.error('Database error in updateStore:', error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error('Store not found');
        }
      }
      throw new Error('Failed to update store');
    }
  }

  async deleteStore(storeId: string): Promise<Store> {
    try {
      const store = await prisma.store.delete({
        where: { storeId }
      });
      return store;
    } catch (error) {
      logger.error('Database error in deleteStore:', error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error('Store not found');
        }
      }
      throw new Error('Failed to delete store');
    }
  }
} 