import client from "../src/client/client.js"

let searchParameters = {
    'q'         : 'harry potter',
    'query_by'  : 'title',
    'filter_by' : 'publication_year:<1998',
    'sort_by'   : 'publication_year:desc'
  }
  
  client.collections('books')
    .documents()
    .search(searchParameters)
    .then(function (searchResults) {
      console.log(JSON.stringify(searchResults))
    })
  
  