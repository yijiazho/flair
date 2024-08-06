const client = require('../src/client/client.js')

client.collections('companies').delete().then((response) => {
    console.log(JSON.stringify(response))
})