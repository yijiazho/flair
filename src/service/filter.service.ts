import { Book } from "src/data/book";
import client from "../client/search-client.js";
import { SearchOptions, SearchParams } from "typesense/lib/Typesense/Documents.js";

export interface Filter {
  key: string;
  value: string;
}

export class FilterService {
  private filter: Filter

  constructor() {
    this.filter = {
      key: 'title', 
      value: '*' 
    };
  }

  // Method to get the current filter
  getFilter(): Filter {
    return this.filter;
  }

  // Method to apply filters and fetch companies

  applyFilters(page = 1, perPage = 10): Promise<{ books: Book[], total: number }> {
    const offset: number = (page - 1) * perPage;
    const searchParameters: SearchParams = {
      q: this.filter.value,
      query_by: this.filter.key,
      per_page: perPage,
      offset: offset
    };
    let options: SearchOptions = {};
    const bookArray: Book[] = [];

    return client.collections('books')
      .documents()
      .search(searchParameters, options)
      .then((response) => {
        
        response.hits?.forEach((hit) => {
          bookArray.push(hit.document as Book);
        });
        return { books: bookArray, total: response.found };
      })
      .catch((error) => {
        console.error('Error', error);
        return { books: bookArray, total: 0 };
      });
  }
}