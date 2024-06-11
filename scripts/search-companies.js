import client from "../src/client/search-client.js"

let searchParameters = {
    'q'         : 'stark',
    'query_by'  : 'company_name',
    'filter_by' : 'num_employees:>100',
    'sort_by'   : 'num_employees:desc'
}

let emptyParams = {
    'q'         : '',
    'query_by'  : 'company_name',  
    'sort_by'   : 'num_employees:desc' 
}

let searchOptions = {};
  
await client.collections('companies').documents().search(emptyParams, searchOptions)
    .then((response) => {
        console.log("Results:", JSON.stringify(response))
    })
    .catch((error) => {
        console.log("Error", error)
    })
  