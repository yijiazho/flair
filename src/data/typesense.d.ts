// src/types/typesense.d.ts
declare module 'typesense' {
    export interface ClientConfig {
      nodes: Array<{ host: string; port: number; protocol: 'http' | 'https' }>;
      apiKey: string;
      connectionTimeoutSeconds?: number;
      numRetries?: number;
      retryIntervalSeconds?: number;
      healthcheckIntervalSeconds?: number;
      useServerSideSearchCache?: boolean;
    }
  
    export interface SearchParameters {
      q: string;
      query_by: string;
      filter_by?: string;
      sort_by?: string;
      max_hits?: number;
      page?: number;
      per_page?: number;
      highlight_full_fields?: string;
      highlight_affix_num_tokens?: number;
      highlight_start_tag?: string;
      highlight_end_tag?: string;
      snippet_threshold?: number;
      num_typos?: number;
      prefix?: 'last' | 'first' | 'none';
      collection_specific_search?: { [collection: string]: SearchParameters };
      exhaustive_search?: boolean;
      search_cutoff_ms?: number;
      use_cache?: boolean;
      cache_ttl_seconds?: number;
      prioritize_exact_match?: boolean;
      typo_tokens_threshold?: number;
    }
  
    class TypesenseError extends Error {
      constructor(message: string);
    }
  
    export interface SearchResponse<T = any> {
      facet_counts: any[];
      found: number;
      out_of: number;
      page: number;
      search_time_ms: number;
      hits: Array<Hit>;
    }
  
    export interface Hit<T> {
        document: T;
        highlights: Array<{
          field: string;
          snippet: string;
          value: string;
        }>;
        text_match: number;
    }
    
    export class Client {
      static Client: any;
      constructor(config: ClientConfig);
      collections(collectionName: string): {
        documents(): {
          search(searchParameters: SearchParameters): Promise<SearchResponse>;
        };
      };
    }
  
    export default Client;
}
  