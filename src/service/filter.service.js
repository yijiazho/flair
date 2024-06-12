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
  applyFilters() {
    // const searchParameters = {
    //   q: this.filter.value,
    //   query_by: this.filter.key,
    //   sort_by: 'num_employees:desc'
    // };

    // const searchOptions = {}; // Default empty options

    // console.log(searchParameters);

    // try {
    //   const response = await client.collections('companies').documents().search(searchParameters, searchOptions);
    //   const companyArray = [];
    //   response.hits?.forEach((hit) => {
    //     companyArray.push(hit.document);
    //   });
    //   console.log("Search results:", companyArray);
    //   return companyArray;
    // } catch (error) {
    //   console.log("Error", error);
    //   throw error; // Rethrow error to be handled by the caller
    // }

    let searchParameters = {
      'q'         : 'harry potter',
      'query_by'  : 'title',
      'filter_by' : 'publication_year:<1998',
      'sort_by'   : 'publication_year:desc'
    }
    //const companyArray = [];

    console.log("client =", client)
    let collections = client.collections('books')
    console.log("collection =", collections)
    let documents = collections.documents()
    console.log("documents =", document)

    //documents.search(searchParameters)

    client.collections('books')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        console.log(JSON.stringify(searchResults))
        //companyArray.push(searchResults.hits?.document)
      }). catch(e => {
        console.log("Error", e);
      })
  }
}

// Export the FilterService class and filterAssets function

