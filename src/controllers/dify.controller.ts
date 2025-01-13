import { Request, Response, NextFunction } from 'express';
import { DifyService } from '../services/dify/DifyService';
import { logger } from '../utils/logger';
import { orderSampleData } from '../lib/data-clensing';
import { convertOrdersToText } from '../lib/data-clensing';
import { orderToSegments } from '../lib/data-clensing';
import { Order } from '../services/store/types';
import { CHUNK_SEPARATOR_SYMBOL } from '../lib/const';
import { ICreateDocumentByTextRequest } from '../services/dify/types/DocumentTypes';

export class DifyController {
  private difyService: DifyService;

  constructor() {
    if (!process.env.DIFY_API_KEY || !process.env.DIFY_BASE_URL) {
      throw new Error('DIFY_API_KEY or DIFY_BASE_URL is not set');
    }
    this.difyService = new DifyService(process.env.DIFY_API_KEY, process.env.DIFY_BASE_URL);
  }

  public createDocumentByText = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId } = req.params;
      const { name } = req.body;

      // サンプルデータから実際のテキストを生成（最初の5件のみ）
      const orderDataObject = JSON.parse(orderSampleData);
      const orderData = orderDataObject.data.orders.edges.map((edge: any) => edge.node) as Order[];
      const orderOrderTop5 = orderData.slice(0, 5);
      const orderText = convertOrdersToText(orderOrderTop5);

      const documentData: ICreateDocumentByTextRequest = {
        name: name || '注文データ',
        text: orderText,
        indexing_technique: 'high_quality' as const,
        doc_form: 'hierarchical_model' as const,
        doc_language: 'ja',
        process_rule: {
          mode: 'custom' as const,
          rules: {
            pre_processing_rules: [
              { id: 'remove_extra_spaces', enabled: true }
            ]
          }
        }
      };

      logger.info('Creating document with data:', documentData);
      const result = await this.difyService.document.createDocumentByText(datasetId, documentData);
      res.status(201).json(result);
    } catch (error) {
      logger.error('Error creating document:', error);
      res.status(500).json({ error: error });
    }
  };

  public createDocumentByFile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId } = req.params;
      const { filePath, ...data } = req.body;
      const result = await this.difyService.document.createDocumentByFile(datasetId, filePath, data);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public updateDocumentByText = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId, documentId } = req.params;
      const result = await this.difyService.document.updateDocumentByText(datasetId, documentId, req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  public getDocuments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId } = req.params;
      const { keyword, page, limit } = req.query;
      const result = await this.difyService.document.getDocuments(
        datasetId,
        keyword as string,
        Number(page),
        Number(limit)
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public deleteDocument = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId, documentId } = req.params;
      await this.difyService.document.deleteDocument(datasetId, documentId); 
      res.status(204).send();
    } catch (error) {
      logger.error('Error deleting document:', error);
      res.status(500).json({ error: error });
    }
  };

  public getDocumentSegments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId, documentId } = req.params;
      const { keyword, status } = req.query;
      const result = await this.difyService.document.getDocumentSegments(
        datasetId,
        documentId,
        keyword as string,
        status === 'completed' ? 'completed' : undefined
      );
      res.json(result);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: error });
    }
  };

  public updateDocumentSegment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId, documentId, segmentId } = req.params;
      const result = await this.difyService.document.updateDocumentSegment(
        datasetId,
        documentId,
        segmentId,
        req.body
      );
      res.json(result);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: error });
    }
  };

  public addDocumentSegments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { datasetId, documentId } = req.params;

      const body = req.body;
      console.log("body", body);

      const orderDataObject = JSON.parse(orderSampleData);
      const orderData = orderDataObject.data.orders.edges.map((edge: any) => edge.node) as Order[];
      const orderText = convertOrdersToText(orderData);
      const segments = orderToSegments(orderText);
      console.log("segments", segments[0]);

      const results = await Promise.all(segments.map(async (segment) => {
        const result = await this.difyService.document.addDocumentSegments(datasetId, documentId, { segments: [{ content: segment.text, keywords: segment.keywords }] });
        console.log("result", result);
      }));
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public createDataset = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.difyService.dataset.createDataset(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.log("error", error);
      res.status(500).json({ error: error });
    }
  };
}
