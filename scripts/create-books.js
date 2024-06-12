import fs from 'fs/promises';
import client from '../src/client/client.js';

const booksInJsonl = await fs.readFile("scripts/books.jsonl");
client.collections('books').documents().import(booksInJsonl);
