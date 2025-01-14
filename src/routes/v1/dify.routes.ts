import { Router } from 'express';
import { DifyController } from '../../controllers/dify.controller';

export const difyRouter = Router();
const difyController = new DifyController();

// Document routes
difyRouter.post('/datasets', difyController.createDataset);
difyRouter.post('/datasets/create-dataset-and-document', difyController.createDatasetAndDocument);
difyRouter.post('/datasets/:datasetId/document/create-by-text', difyController.createDocumentByText);
difyRouter.post('/datasets/:datasetId/documents/:documentId/update-by-text', difyController.updateDocumentByText);
difyRouter.get('/datasets/:datasetId/documents', difyController.getDocuments);
difyRouter.get('/datasets', difyController.getDatasets);
difyRouter.delete('/datasets/:datasetId/documents/:documentId', difyController.deleteDocument);

// Segment routes
difyRouter.get('/datasets/:datasetId/documents/:documentId/segments', difyController.getDocumentSegments);
difyRouter.post('/datasets/:datasetId/documents/:documentId/segments/:segmentId', difyController.updateDocumentSegment); 