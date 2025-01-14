export interface IPreProcessingRule {
    id: 'remove_extra_spaces' | 'remove_urls_emails' | string;
    enabled: boolean;
  }
  
  export interface ISegmentation {
    separator?: string;   // デフォルト "\n"
    max_tokens?: number;  // デフォルト 1000
    chunk_overlap?: number; // デフォルト 0
  }
  
  export interface IRules {
    pre_processing_rules?: IPreProcessingRule[];
    segmentation?: ISegmentation;
    parent_mode?: 'full-doc' | 'paragraph';
    subchunk_segmentation?: ISegmentation;
  }
  
  export interface IProcessRule {
    mode: 'automatic' | 'custom' | 'hierarchical';
    rules?: IRules;
  }
  
  
  /**
   * DocumentのSegment(Chunk)関連
   */
  export interface ISegment {
    id: string;
    position: number;
    document_id: string;
    content: string;
    answer?: string;
    word_count?: number;
    tokens?: number;
    keywords?: string[];
    index_node_id?: string;
    index_node_hash?: string;
    hit_count?: number;
    enabled: boolean;
    disabled_at?: number | null;
    disabled_by?: string | null;
    status?: string;
    created_by?: string;
    created_at?: number;
    indexing_at?: number;
    completed_at?: number;
    error?: string | null;
    stopped_at?: number | null;
    document?: {
      id: string;
      data_source_type: string;
      name: string;
      doc_type?: string | null;
    };
  }
  
  export interface IAddSegmentsRequest {
    segments: Array<{
      content: string;
      answer?: string;
      keywords?: string[];
    }>;
  }
  
  export interface IAddSegmentsResponse {
    data: ISegment[];
    doc_form: string;
  }
  
  export interface IGetSegmentsResponse {
    data: ISegment[];
    doc_form: string;
  }
  

  export interface IDeleteSegmentResponse {
    data: ISegment;
  }
  
  export interface IUpdateSegmentRequest {
    segment: {
      content: string;
      answer: string;
      keywords: string[];
      enabled: boolean;
    };
  }
  
  export interface IUpdateSegmentResponse {
    data: ISegment[];
    doc_form: string;
  }


//   {
//     "id": "876ef10c-a3f7-4d64-a070-2d023574086d",
//     "name": "Industry Research",
//     "description": "",
//     "provider": "vendor",
//     "permission": "only_me",
//     "data_source_type": null,
//     "indexing_technique": null,
//     "app_count": 0,
//     "document_count": 0,
//     "word_count": 0,
//     "created_by": "82b33ec0-a049-404b-9c66-92c47721e393",
//     "created_at": 1736820325,
//     "updated_by": "82b33ec0-a049-404b-9c66-92c47721e393",
//     "updated_at": 1736820325,
//     "embedding_model": null,
//     "embedding_model_provider": null,
//     "embedding_available": null,
//     "retrieval_model_dict": {
//         "search_method": "semantic_search",
//         "reranking_enable": false,
//         "reranking_mode": null,
//         "reranking_model": {
//             "reranking_provider_name": "",
//             "reranking_model_name": ""
//         },
//         "weights": null,
//         "top_k": 2,
//         "score_threshold_enabled": false,
//         "score_threshold": null
//     },
//     "tags": [],
//     "doc_form": null,
//     "external_knowledge_info": {
//         "external_knowledge_id": null,
//         "external_knowledge_api_id": null,
//         "external_knowledge_api_name": null,
//         "external_knowledge_api_endpoint": null
//     },
//     "external_retrieval_model": {
//         "top_k": 2,
//         "score_threshold": 0,
//         "score_threshold_enabled": null
//     }
// }


// Dify Version:0.15.0　Create Document By Text Request
//   {
//     "dataset": {
//         "id": "0b62de10-d8be-40a5-9848-3c412e65339e",
//         "name": "\u682a\u5f0f\u4f1a\u793e JINNOVATION\u69d8_...",
//         "description": "useful for when you want to answer queries about the \u682a\u5f0f\u4f1a\u793e JINNOVATION\u69d8_ECC\u69d8\u3000_\u898b\u7a4d\u66f8_Q-0000000002 (1).pdf",
//         "permission": "only_me",
//         "data_source_type": "upload_file",
//         "indexing_technique": "high_quality",
//         "created_by": "9afc17c4-83c5-4cc7-aef3-da2083814050",
//         "created_at": 1736818092
//     },
//     "documents": [
//         {
//             "id": "b2329ebc-97a8-451d-82fd-4498ad2f3a01",
//             "position": 1,
//             "data_source_type": "upload_file",
//             "data_source_info": {
//                 "upload_file_id": "7404e18c-a5fc-4d96-905d-e510f17f01ca"
//             },
//             "data_source_detail_dict": {
//                 "upload_file": {
//                     "id": "7404e18c-a5fc-4d96-905d-e510f17f01ca",
//                     "name": "\u682a\u5f0f\u4f1a\u793e JINNOVATION\u69d8_ECC\u69d8\u3000_\u898b\u7a4d\u66f8_Q-0000000002 (1).pdf",
//                     "size": 62909,
//                     "extension": "pdf",
//                     "mime_type": "application/pdf",
//                     "created_by": "9afc17c4-83c5-4cc7-aef3-da2083814050",
//                     "created_at": 1736817988.636706
//                 }
//             },
//             "dataset_process_rule_id": "93d15f99-f6d3-42e8-90d9-0d3f11619a49",
//             "name": "\u682a\u5f0f\u4f1a\u793e JINNOVATION\u69d8_ECC\u69d8\u3000_\u898b\u7a4d\u66f8_Q-0000000002 (1).pdf",
//             "created_from": "web",
//             "created_by": "9afc17c4-83c5-4cc7-aef3-da2083814050",
//             "created_at": 1736818092,
//             "tokens": 0,
//             "indexing_status": "parsing",
//             "error": null,
//             "enabled": true,
//             "disabled_at": null,
//             "disabled_by": null,
//             "archived": false,
//             "display_status": "indexing",
//             "word_count": 0,
//             "hit_count": 0,
//             "doc_form": "hierarchical_model"
//         }
//     ],
//     "batch": "20250114012812330297"
// }


// {
//   "mode": "hierarchical",
//   "rules": {
//       "pre_processing_rules": [
//           {
//               "id": "remove_extra_spaces",
//               "enabled": true
//           },
//           {
//               "id": "remove_urls_emails",
//               "enabled": false
//           }
//       ],
//       "segmentation": {
//           "separator": "\n\n",
//           "max_tokens": 500,
//           "chunk_overlap": 0
//       },
//       "parent_mode": "paragraph",
//       "subchunk_segmentation": {
//           "separator": "\n",
//           "max_tokens": 200,
//           "chunk_overlap": 0
//       }
//   },
//   "limits": {
//       "indexing_max_segmentation_tokens_length": 4000
//   }
// }