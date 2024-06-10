import typesenseClient from '../api/typesenseClient';
import { Hit, SearchResponse } from 'typesense';

interface SearchResult {
  id: string;
  title: string;
  content: string;
}

export const searchDocuments = async (query: string): Promise<SearchResult[]> => {
  try {
    console.log('search documents')
    const searchParameters = {
      q: query,
      query_by: 'content', // suppose content in schema is "description"
    };

    console.log(typesenseClient)
    console.log(typesenseClient.collections('collection1').documents())

    const searchResults: SearchResponse<SearchResult> = await typesenseClient.collections('collection1').documents().search(searchParameters);
    console.log(searchResults);

    // Filter out undefined hits and transform the response to match the SearchResult type
    return searchResults.hits
      .filter((hit): hit is Hit<SearchResult> => !!hit && !!hit.document)
      .map((hit: Hit<SearchResult>) => ({
        id: hit.document.id,
        title: hit.document.title,
        content: hit.document.content,
      }));
  } catch (error) {
    console.error('Error searching documents:', error);
    return [];
  }
};
