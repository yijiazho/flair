import client from "../src/client/client.js";

client.collections().retrieve()
  .then(response => {
    console.log('Collections in the cluster:', JSON.stringify(response));
  })
  .catch(error => {
    console.error('Error retrieving collections:', error);
  });
