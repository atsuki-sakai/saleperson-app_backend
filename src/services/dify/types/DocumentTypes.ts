
import { IProcessRule } from './SegmentTypes';

export interface ICreateDocumentByTextRequest {
  name: string;
  text: string;
  indexing_technique: 'high_quality' | 'economy';
  doc_form?: 'text_model' | 'hierarchical_model' | 'qa_model';
  doc_language?: string;
  process_rule?: IProcessRule;
}

export interface IDocumentInfo {
  id: string;
  position: number;
  data_source_type: string;
  data_source_info?: {
    upload_file_id?: string;
  };
  dataset_process_rule_id: string;
  name: string;
  created_from: string;
  created_by: string;
  created_at: number;
  tokens: number;
  indexing_status: string;
  error: string | null;
  enabled: boolean;
  disabled_at: number | null;
  disabled_by: string | null;
  archived: boolean;
  display_status?: string;
  word_count: number;
  hit_count?: number;
  doc_form: string;
}

export interface ICreateDocumentByTextResponse {
  document: IDocumentInfo;
  batch: string;
}

// ... create-by-file, update-by-text なども同様に定義 ...

export interface IGetDocumentsResponse {
  data: IDocumentInfo[];
  has_more: boolean;
  limit: number;
  total: number;
  page: number;
}
