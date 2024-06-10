const Typesense = require('typesense');
const fs = require('fs');

// Read the collection schema from the JSON file
const collectionSchema = JSON.parse(fs.readFileSync('collectionSchema.json', 'utf8'));

const typesense = new Typesense.Client({
  nodes: [
    {
      host: 'localhost', // Change to your host if different
      port: 8108,
      protocol: 'http',
    },
  ],
  apiKey: 'xyz', 
  connectionTimeoutSeconds: 2,
});

async function createCollection() {
  try {
    const collection = await typesense.collections().create(collectionSchema);
    console.log(collection);
  } catch (error) {
    console.error('Error creating collection:', error);
  }
}

createCollection();
