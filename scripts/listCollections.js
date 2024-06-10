const Typesense = require('typesense');

const typesense = new Typesense.Client({
  nodes: [
    {
      host: 'localhost', // Change to your host if different
      port: 8108,
      protocol: 'http',
    },
  ],
  apiKey: 'xyz', // Replace with your actual API key
  connectionTimeoutSeconds: 2,
});

async function listCollections() {
  try {
    const collections = await typesense.collections().retrieve();
    console.log(collections);
  } catch (error) {
    console.error('Error retrieving collections:', error);
  }
}

listCollections();
