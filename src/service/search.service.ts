import client from "../client/client.js";
import { SearchParams, SearchResponse } from "typesense/lib/Typesense/Documents.js";
import { Company } from "src/data/company.js";

/*
let searchParameters: SearchParams = {
  q: 'stark',
  query_by: 'company_name',
  filter_by: 'num_employees:>100',
  sort_by: 'num_employees:desc'
};
*/

interface Filter {
    key: string;
    value: string;
}

let filter: Filter = {
    key: 'company_name',
    value: 'stark'
}

let searchParameters: SearchParams = {
    q: filter.value,
    query_by: filter.key,
    sort_by: 'num_employees:desc'
}

client.collections('companies').documents().search(searchParameters)
  .then((response: SearchResponse<object>) => {
    const responseArray: Company[] = [];
    response.hits?.forEach((hit) => {
        responseArray.push(hit.document as Company)
    })
  })
  .catch((error: any) => {
    console.log("Error", error);
});
