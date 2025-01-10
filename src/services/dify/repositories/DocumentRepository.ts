import axios, { AxiosInstance, AxiosError } from 'axios';
import { DifyDrror } from '../types/DifyDrror';

import {
  ICreateDocumentByTextRequest,
  ICreateDocumentByTextResponse,
  // ... 他のドキュメント関連型をimport
} from '../types';

export class DocumentRepository {
  private apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

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


  private handleError(err: unknown): never {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      const statusCode = axiosError.response?.status;
      const statusText = axiosError.response?.statusText;
      const data = axiosError.response?.data as { code?: string; message?: string };

      const errorMsg = data?.message || 'Document APIで不明なエラーが発生しました。';
      throw new DifyDrror(
        `[DocumentRepository] ${errorMsg} (status: ${statusCode} ${statusText ?? ''})`,
        data?.code,
        statusCode
      );
    } else {
      throw new DifyDrror('[DocumentRepository] 不明なエラーが発生しました。');
    }
  }
}
