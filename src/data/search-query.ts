export interface SearchRequest {
    q: string;
    query_by: string;
    prefix?: string;
    infix?: string;
    filter_by?: string;
    sort_by?: string;
}