const client = require("../src/client/client.js")

let searchParameters = {
    'q'         : '*',
    'query_by'  : 'title',
    'filter_by' : 'average_rating:>3',
    'sort_by'   : 'average_rating:desc',
    'per_page'  : '5',
    'offset'     : '100'
  }
  
  client.collections('books')
    .documents()
    .search(searchParameters)
    .then(function (searchResults) {
      console.log(JSON.stringify(searchResults))
      console.log(searchResults.hits?.length)
      
    })
  
  