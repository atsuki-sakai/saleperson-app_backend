import { Request, Response, NextFunction } from 'express';
import { DifyService } from '../services/dify/DifyService';
import { logger } from '../utils/logger';
import { orderSampleData, productSampleData } from '../lib/data-clensing';
import { convertOrdersToText, convertProductsToText } from '../lib/data-clensing';
import { orderToSegments } from '../lib/data-clensing';
import { Order } from '../services/store/types';
import { ICreateDocumentByTextRequest, ICreateDatasetRequest } from '../services/dify/types';
import { CHUNK_SEPARATOR_SYMBOL } from '../lib/const';
import { z } from 'zod';

// Schema
const createDatasetSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  indexing_technique: z.enum(['high_quality']),
  permission: z.enum(['only_me']),
});

const createDocumentByTextSchema = z.object({
  name: z.string().min(1),
  text: z.string().min(1),
  indexing_technique: z.enum(['high_quality', "economy"]),
  doc_form: z.enum(['hierarchical_model', "text_model", "qa_model"]),
  doc_language: z.enum(["Japanese", "English", "Chinese"]),
  process_rule: z.object({
    mode: z.enum(['hierarchical', "automatic", "custom"]),
    rules: z.object({
      pre_processing_rules: z.array(z.object({
        id: z.enum(["remove_extra_spaces", "remove_urls_emails"]),
        enabled: z.boolean(),
      })),
      segmentation: z.object({
        separator: z.string().min(2),
        max_tokens: z.number().min(300).max(4000),
        chunk_overlap: z.number().min(30).max(400),
      }),
      parent_mode: z.enum(['paragraph', 'full-doc']),
      subchunk_segmentation: z.object({
        separator: z.string().min(2),
        max_tokens: z.number().min(300).max(4000),
        chunk_overlap: z.number().min(30).max(400),
      }),
    }),
  }),
});

const getDatasetsSchema = z.object({
  page: z.number().min(1).max(100),
  limit: z.number().min(1).max(100),
});

const addDocumentSegmentsSchema = z.object({
  segments: z.array(z.object({
    answer: z.string().optional(),
    content: z.string().min(1),
    keywords: z.array(z.string()).optional(),
  })),
});

const createDatasetAndDocumentSchema = z.object({
  datasetName: z.string().min(1).max(100),
  documentName: z.string().min(1).max(100),
  documentType: z.enum(['order', 'product', 'faq', 'system_prompt', 'store_info']),
  documentText: z.string().min(1).max(1000000),
});


// Controller
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
      if (!datasetId) {
        return res.status(400).json({ error: 'datasetId is required' });
      }
      const validatedData = createDocumentByTextSchema.parse(req.body);
      logger.info('Creating document with data:', req.body);
      const result = await this.difyService.document.createDocumentByText(datasetId, validatedData);
      res.status(201).json(result);
    } catch (error) {
      logger.error('Error creating document:', error);
      res.status(500).json({ error: error });
    }
  };

  public updateDocumentByText = async (req: Request, res: Response) => {
    try {
      const { datasetId, documentId } = req.params;
      if(!datasetId){
        return res.status(400).json({ error: 'datasetId is required' });
      }
      if(!documentId){
        return res.status(400).json({ error: 'documentId is required' });
      }
      const validatedData = createDocumentByTextSchema.parse(req.body);
      const result = await this.difyService.document.updateDocumentByText(datasetId, documentId, validatedData);
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
      const { page, limit } = req.query;
      const validatedData = getDatasetsSchema.parse({ page: Number(page), limit: Number(limit) });
      const result = await this.difyService.document.getDocuments(
        datasetId,
        Number(validatedData.page),
        Number(validatedData.limit)
      );
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public deleteDocument = async (req: Request, res: Response) => {
    try {
      const { datasetId, documentId } = req.params;
      if(!datasetId){
        return res.status(400).json({ error: 'datasetId is required' });
      }
      if(!documentId){
        return res.status(400).json({ error: 'documentId is required' });
      }
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
      if(!datasetId){
        return res.status(400).json({ error: 'datasetId is required' });
      }
      if(!documentId){
        return res.status(400).json({ error: 'documentId is required' });
      }
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
      if(!datasetId){
        return res.status(400).json({ error: 'datasetId is required' });
      }
      if(!documentId){
        return res.status(400).json({ error: 'documentId is required' });
      }
      if(!segmentId){
        return res.status(400).json({ error: 'segmentId is required' });
      }
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

  public addDocumentSegments = async (req: Request, res: Response) => {
    try {
      const { datasetId, documentId } = req.params;
      if(!datasetId){
        return res.status(400).json({ error: 'datasetId is required' });
      }
      if(!documentId){
        return res.status(400).json({ error: 'documentId is required' });
      }
      const validatedData = addDocumentSegmentsSchema.parse(req.body);
      const result = await this.difyService.document.addDocumentSegments(datasetId, documentId, validatedData);
   
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  };

  public createDataset = async (req: Request, res: Response) => {
    try {
      const validatedData = createDatasetSchema.parse(req.body);
      const result = await this.difyService.dataset.createDataset(validatedData);
      res.status(201).json(result);
    } catch (error) {
      
      res.status(500).json({ error: error });
    }
  };

  public createDatasetAndDocument = async (req: Request, res: Response) => {
    try {
      const validatedData = createDatasetAndDocumentSchema.parse(req.body);
      const datasetBody: ICreateDatasetRequest = {
        name: validatedData.datasetName  + "_" + validatedData.documentType,
        description: validatedData.documentName,
        indexing_technique: 'high_quality',
        permission: 'only_me'
      }
      const dataset = await this.difyService.dataset.createDataset(datasetBody);
      const documentBody: ICreateDocumentByTextRequest = {
        name: validatedData.documentName,
        text: validatedData.documentText,
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