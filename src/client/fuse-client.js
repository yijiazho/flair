const Fuse = require('fuse.js') // ES5
const books = require('./books.json')

const options = {
    keys: [
        "title"
    ]
};

const fuse = new Fuse(books, options)

result = fuse.search("rolll")
console.log(JSON.stringify(result))