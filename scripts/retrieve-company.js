import client from "../src/client/client.js"

client.collections('companies').documents('124').retrieve()
.then((response) => {
    console.log(response)

})
.catch((err) => {
    console.log("Error", err);
})