
import client from "../client/search-client.js";

export class FilterService {
  constructor() {
    this.filter = {
      key: 'company_name', // default field to query
      value: '' // default value is empty
    };
  }

  // Method to get the current filter
  getFilter() {
    return this.filter;
  }

  // Method to apply filters and fetch companies
  async applyFilters() {
    const searchParameters = {
      q: this.filter.value,
      query_by: this.filter.key,
      sort_by: 'num_employees:desc'
    };

    const searchOptions = {}; // Default empty options

    console.log(searchParameters);

    try {
      const response = await client.collections('companies').documents().search(searchParameters, searchOptions);
      const companyArray = [];
      response.hits?.forEach((hit) => {
        companyArray.push(hit.document);
      });
      console.log("Search results:", companyArray);
      return companyArray;
    } catch (error) {
      console.log("Error", error);
      throw error; // Rethrow error to be handled by the caller
    }
  }
}

// Export the FilterService class and filterAssets function

