import axios, { AxiosInstance, AxiosError } from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';
import { DifyError } from '../types/DifyError';

import {
  ICreateDocumentByTextRequest,
  ICreateDocumentByTextResponse,
  ICreateDocumentByFileResponse,
  IUpdateDocumentByTextRequest,
  IUpdateDocumentByTextResponse,
  IUpdateDocumentByFileResponse,
  IGetDocumentsResponse,
  IDeleteDocumentResponse,
  IGetIndexingStatusResponse,
  IAddSegmentsRequest,
  IAddSegmentsResponse,
  IGetSegmentsResponse,
  IRetrieveRequest,
  IRetrieveResponse,
  IDeleteSegmentResponse,
  IUpdateSegmentRequest,
  IUpdateSegmentResponse,
} from '../types';

export class DocumentRepository {
  private apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * ========== 1) Create Document by Text ==========
   * POST /datasets/{dataset_id}/document/create-by-text
   */
  public async createDocumentByText(
    datasetId: string,
    data: ICreateDocumentByTextRequest
  ): Promise<ICreateDocumentByTextResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/document/create-by-text`;
      const response = await this.apiClient.post<ICreateDocumentByTextResponse>(endpoint, data);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 2) Create Document by File ==========
   * POST /datasets/{dataset_id}/document/create-by-file
   * multipart/form-data でファイルを送信します。
   */
  public async createDocumentByFile(
    datasetId: string,
    filePath: string,
    dataPayload: Record<string, any>
  ): Promise<ICreateDocumentByFileResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/document/create-by-file`;
      const form = new FormData();
      form.append('data', JSON.stringify(dataPayload));
      form.append('file', createReadStream(filePath));

      const response = await this.apiClient.post<ICreateDocumentByFileResponse>(endpoint, form, {
        headers: form.getHeaders(),
      });
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 3) Update Document by Text ==========
   * POST /datasets/{dataset_id}/documents/{document_id}/update-by-text
   */
  public async updateDocumentByText(
    datasetId: string,
    documentId: string,
    data: IUpdateDocumentByTextRequest
  ): Promise<IUpdateDocumentByTextResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/update-by-text`;
      const response = await this.apiClient.post<IUpdateDocumentByTextResponse>(endpoint, data);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 4) Update Document by File ==========
   * POST /datasets/{dataset_id}/documents/{document_id}/update-by-file
   */
  public async updateDocumentByFile(
    datasetId: string,
    documentId: string,
    filePath: string,
    dataPayload: Record<string, any>
  ): Promise<IUpdateDocumentByFileResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/update-by-file`;

      const form = new FormData();
      form.append('data', JSON.stringify(dataPayload), { contentType: 'text/plain' });
      form.append('file', filePath); // 実ファイルなら fs.createReadStream など

      const response = await this.apiClient.post<IUpdateDocumentByFileResponse>(endpoint, form, {
        headers: form.getHeaders(),
      });
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 5) Get Document List ==========
   * GET /datasets/{dataset_id}/documents
   */
  public async getDocuments(
    datasetId: string,
    keyword?: string,
    page = 1,
    limit = 20
  ): Promise<IGetDocumentsResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents`;
      const params: Record<string, any> = { page, limit };
      if (keyword) {
        params.keyword = keyword;
      }
      const response = await this.apiClient.get<IGetDocumentsResponse>(endpoint, { params });
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 6) Delete a Document ==========
   * DELETE /datasets/{dataset_id}/documents/{document_id}
   */
  public async deleteDocument(
    datasetId: string,
    documentId: string
  ): Promise<IDeleteDocumentResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}`;
      const response = await this.apiClient.delete<IDeleteDocumentResponse>(endpoint);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 7) Get Document Embedding Status ==========
   * GET /datasets/{dataset_id}/documents/{batch}/indexing-status
   */
  public async getIndexingStatus(
    datasetId: string,
    batch: string
  ): Promise<IGetIndexingStatusResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${batch}/indexing-status`;
      const response = await this.apiClient.get<IGetIndexingStatusResponse>(endpoint);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 8) Add Chunks to a Document (Segments) ==========
   * POST /datasets/{dataset_id}/documents/{document_id}/segments
   */
  public async addDocumentSegments(
    datasetId: string,
    documentId: string,
    segments: IAddSegmentsRequest
  ): Promise<IAddSegmentsResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/segments`;
      const response = await this.apiClient.post<IAddSegmentsResponse>(endpoint, segments);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 9) Get Chunks from a Document (Segments) ==========
   * GET /datasets/{dataset_id}/documents/{document_id}/segments
   */
  public async getDocumentSegments(
    datasetId: string,
    documentId: string,
    keyword?: string,
    status?: 'completed'
  ): Promise<IGetSegmentsResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/segments`;
      const params: Record<string, any> = {};
      if (keyword) params.keyword = keyword;
      if (status) params.status = status;

      const response = await this.apiClient.get<IGetSegmentsResponse>(endpoint, { params });
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 10) Update a Chunk in a Document ==========
   * POST /datasets/{dataset_id}/documents/{document_id}/segments/{segment_id}
   */
  public async updateDocumentSegment(
    datasetId: string,
    documentId: string,
    segmentId: string,
    data: IUpdateSegmentRequest
  ): Promise<IUpdateSegmentResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/segments/${segmentId}`;
      const response = await this.apiClient.post<IUpdateSegmentResponse>(endpoint, data);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 11) Delete a Chunk in a Document ==========
   * DELETE /datasets/{dataset_id}/documents/{document_id}/segments/{segment_id}
   */
  public async deleteDocumentSegment(
    datasetId: string,
    documentId: string,
    segmentId: string
  ): Promise<IDeleteSegmentResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/documents/${documentId}/segments/${segmentId}`;
      const response = await this.apiClient.delete<IDeleteSegmentResponse>(endpoint);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 12) Retrieve Chunks from a Knowledge Base ==========
   * POST /datasets/{dataset_id}/retrieve
   */
  public async retrieve(
    datasetId: string,
    requestBody: IRetrieveRequest
  ): Promise<IRetrieveResponse> {
    try {
      const endpoint = `/datasets/${datasetId}/retrieve`;
      const response = await this.apiClient.post<IRetrieveResponse>(endpoint, requestBody);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  /**
   * ========== 共通エラーハンドリング ==========
   */
  private handleError(err: unknown): never {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      const statusCode = axiosError.response?.status;
      const statusText = axiosError.response?.statusText;
      const data = axiosError.response?.data as { code?: string; message?: string };

      const errorMsg = data?.message || 'Document APIで不明なエラーが発生しました。';
      throw new DifyError(
        `[DocumentRepository] ${errorMsg} (status: ${statusCode} ${statusText ?? ''})`,
        data?.code,
        statusCode
      );
    } else {
      throw new DifyError('[DocumentRepository] 不明なエラーが発生しました。');
    }
  }
}