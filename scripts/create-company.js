import client from "../src/client/client.js"

let documents = 
[
    {
        'id': '124',
        'company_name': 'Stark Industries',
        'num_employees': 5215,
        'country': 'USA'
    },
    {
        'id': '125',
        'company_name': 'Future Technologies',
        'num_employees': 1234,
        'country': 'UK'
    },
    {
        'id': '126',
        'company_name': 'Arasuka',
        'num_employees': 7199,
        'country': 'JPN'
    }
]
  
  // IMPORTANT: Be sure to increase connectionTimeoutSeconds to at least 5 minutes or more for imports,
  //  when instantiating the client
  
client.collections('companies').documents().import(documents, {action: 'create'})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log("Error", error)
    })
