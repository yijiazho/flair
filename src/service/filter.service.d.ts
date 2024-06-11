declare module 'src/service/filter.service' {
    export interface Filter {
      key: string;
      value: string;
    }
  
    export class FilterService {
      private filter: Filter;
      constructor();
      getFilter(): Filter;
      applyFilters(): Promise<Company[]>;
    }  
}
  