import { Request, Response, NextFunction } from 'express';
import { DifyService } from '../services/dify/DifyService';
import { logger } from '../utils/logger';
import { orderSampleData, productSampleData } from '../lib/data-clensing';
import { convertOrdersToText, convertProductsToText } from '../lib/data-clensing';
import { orderToSegments } from '../lib/data-clensing';
import { Order } from '../services/store/types';
import { ICreateDocumentByTextRequest, ICreateDatasetRequest } from '../services/dify/types';
import { CHUNK_SEPARATOR_SYMBOL } from '../lib/const';


export class DifyController {
  private difyService: DifyService;

  constructor() {
    if (!process.env.DIFY_API_KEY || !process.env.DIFY_BASE_URL) {
      throw new Error('DIFY_API_KEY or DIFY_BASE_URL is not set');
    }
    this.difyService = new DifyService(process.env.DIFY_API_KEY, process.env.DIFY_BASE_URL);
  }

  public createDocumentByText = async (req: Request, res: Response) => {
    try {
      const { datasetId } = req.params;
      logger.info('Creating document with data:', req.body);
      const result = await this.difyService.document.createDocumentByText(datasetId, req.body);
      res.status(201).json(result);
    } catch (error) {
      logger.error('Error creating document:', error);
      res.status(500).json({ error: error });
    }
  };

  public createDocumentByFile = async (req: Request, res: Response) => {
    try {
      const { datasetId } = req.params;
      const { filePath, ...data } = req.body;
      const result = await this.difyService.document.createDocumentByFile(datasetId, filePath, data);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public updateDocumentByText = async (req: Request, res: Response) => {
    try {
      const { datasetId, documentId } = req.params;
      const result = await this.difyService.document.updateDocumentByText(datasetId, documentId, req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public getDatasets = async (req: Request, res: Response) => {
    try {
      const result = await this.difyService.dataset.getDatasets(1, 100);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };
  
  public getDocuments = async (req: Request, res: Response) => {
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

  public deleteDocument = async (req: Request, res: Response) => {
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
      res.status(500).json({ error: error });
    }
  };

  public createDataset = async (req: Request, res: Response) => {
    try {
      const result = await this.difyService.dataset.createDataset(req.body);
      res.status(201).json(result);
    } catch (error) {
      
      res.status(500).json({ error: error });
    }
  };

  public createDatasetAndDocument = async (req: Request, res: Response) => {
    try {
      const { datasetName, documentName, documentType, documentText } = req.body;
      const datasetBody: ICreateDatasetRequest = {
        name: datasetName,
        description: documentName,
        indexing_technique: 'high_quality',
        permission: 'only_me'
      }
      const dataset = await this.difyService.dataset.createDataset(datasetBody);
      const documentBody: ICreateDocumentByTextRequest = {
        name: documentName,
        text: documentText,
        indexing_technique: 'high_quality',
        doc_form: 'hierarchical_model',
        doc_language: 'ja',
        process_rule: {
          mode: 'hierarchical',
          rules: {
            "pre_processing_rules": [
              {
                  "id": "remove_extra_spaces",
                  "enabled": true
              },
              {
                  "id": "remove_urls_emails",
                  "enabled": false
              }
          ],
            segmentation: {
              separator: CHUNK_SEPARATOR_SYMBOL,
              max_tokens: 4000,
              chunk_overlap:30
            },
            parent_mode: 'paragraph',
            subchunk_segmentation: {
              separator: "\n",
              max_tokens: 1000,
              chunk_overlap: 30
            }
          }
        }
      }
      const document = await this.difyService.document.createDocumentByText(dataset.id, documentBody);
      res.json({ dataset, document });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

}