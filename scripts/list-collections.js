const client = require('../src/client/client.js');

client.collections('books').retrieve().then((response) => {

    console.log(JSON.stringify(response))
})