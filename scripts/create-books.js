const fs = require('fs/promises');
const client = require('../src/client/client.js');

async function importBooks() {
  
    const booksInJsonl = await fs.readFile('scripts/books.jsonl');

    let books = [
        {"title":"Eragon","authors":["Christopher Paolini"],"publication_year":2002,"id":"53","average_rating":3.86,"image_url":"https://images.gr-assets.com/books/1366212852m/113436.jpg","ratings_count":1104021},
        {"title":"The Hitchhiker's Guide to the Galaxy","authors":["Douglas Adams"],"publication_year":1979,"id":"54","average_rating":4.2,"image_url":"https://images.gr-assets.com/books/1327656754m/11.jpg","ratings_count":936782},
        {"title":"Brave New World","authors":["Aldous Huxley"],"publication_year":1932,"id":"55","average_rating":3.97,"image_url":"https://images.gr-assets.com/books/1487389574m/5129.jpg","ratings_count":1022601},
        {"title":"Breaking Dawn","authors":["Stephenie Meyer"],"publication_year":2008,"id":"56","average_rating":3.7,"image_url":"https://images.gr-assets.com/books/1361039438m/1162543.jpg","ratings_count":1070245},
        {"title":"The Secret Life of Bees","authors":["Sue Monk Kidd"],"publication_year":2001,"id":"57","average_rating":4.01,"image_url":"https://images.gr-assets.com/books/1473454532m/37435.jpg","ratings_count":916189},
        {"title":"The Adventures of Huckleberry Finn","authors":["Mark Twain"," John Seelye"," Guy Cardwell"],"publication_year":1884,"id":"58","average_rating":3.8,"image_url":"https://images.gr-assets.com/books/1405973850m/2956.jpg","ratings_count":953758},
        {"title":"Charlotte's Web","authors":["E.B. White"," Garth Williams"," Rosemary Wells"],"publication_year":1952,"id":"59","average_rating":4.15,"image_url":"https://images.gr-assets.com/books/1439632243m/24178.jpg","ratings_count":1064521}

    ]

    client.collections('books').documents().import(books, {action: 'create'});

    // client.collections('books').documents().import(booksInJsonl, {batch_size: 1000})
    //     .catch(response => {
    //         console.log(JSON.stringify(response))
    //     })
    

} 

importBooks();
