
import axios, { AxiosInstance, AxiosError } from 'axios';
import { DifyError } from '../types/DifyError';

import {
  ICreateDatasetRequest,
  ICreateDatasetResponse,
  IGetDatasetsResponse,
} from '../types';

export class DatasetRepository {
  private apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  public async createDataset(data: ICreateDatasetRequest): Promise<ICreateDatasetResponse> {
    try {
      const response = await this.apiClient.post<ICreateDatasetResponse>('/datasets', data);
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  public async getDatasets(page = 1, limit = 20): Promise<IGetDatasetsResponse> {
    try {
      const response = await this.apiClient.get<IGetDatasetsResponse>('/datasets', {
        params: { page, limit },
      });
      return response.data;
    } catch (err) {
      this.handleError(err);
    }
  }

  public async deleteDataset(datasetId: string): Promise<void> {
    try {
      await this.apiClient.delete(`/datasets/${datasetId}`);
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

      const errorMsg = data?.message || 'Dataset APIで不明なエラーが発生しました。';
      throw new DifyError(
        `[DatasetRepository] ${errorMsg} (status: ${statusCode} ${statusText ?? ''})`,
        data?.code,
        statusCode
      );
    } else {
      throw new DifyError('[DatasetRepository] 不明なエラーが発生しました。');
    }
  }
}
