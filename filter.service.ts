// import { SearchFilters } from "src/data/search-filters";
// import client from "../client/search-client.js";
// import { SearchOptions, SearchParams, SearchResponse } from "typesense/lib/Typesense/Documents.js";
// import { Company } from "src/data/company.js";

// /*
// let searchParameters: SearchParams = {
//   q: 'stark',
//   query_by: 'company_name',
//   filter_by: 'num_employees:>100',
//   sort_by: 'num_employees:desc'
// };
// */

// export interface Filter {
//     key: string;
//     value: string;
// }

// export class FilterService {
//     private filter: Filter;

//     constructor() {
//         // Initialize with default filter
//         this.filter = {
//           key: 'company_name', // default field to query
//           value: '' // default value is empty
//         };
//     }

//     getFilter(): Filter {
//         return this.filter;
//     }


//     async applyFilters(): Promise<Company[]> {
//         let searchParameters: SearchParams = {
//             q: this.filter.value,
//             query_by: this.filter.key,
//             sort_by: 'num_employees:desc'
//         };

//         let searchOptions: SearchOptions = {};
//         console.log(searchParameters)
    
//         try {
//             const response: SearchResponse<object> = await client.collections('companies').documents().search(searchParameters, searchOptions);
//             const companyArray: Company[] = [];
//             response.hits?.forEach((hit) => {
//                 companyArray.push(hit.document as Company);
//             });
//             console.log("Search results:", companyArray);
//             return companyArray;
//         } catch (error: any) {
//             console.log("Error", error);
//             throw error; // Rethrow error to be handled by the caller
//         }
//     }
// }



// export const filterAssets = (assets: Asset[], filters: SearchFilters): Asset[] => {
//     return assets.filter(asset => {
        
//         const assetDate = new Date(asset.date).getTime();
//         const startDate = filters.dateRange.start;
//         const endDate = filters.dateRange.end;

//         return (
//             asset.title.includes(filters.query) &&
//             asset.description.includes(filters.description) &&
//             asset.tags.some(tag => tag.includes(filters.tags)) &&
//             assetDate >= startDate &&
//             assetDate <= endDate
//         );
//     });
// };
