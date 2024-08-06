const fs = require('fs');
const path = require('path');
const readline = require('readline');

const convertJsonlToJson = async (inputFileName, outputFileName) => {
  const inputFilePath = path.join(__dirname, inputFileName);
  const outputFilePath = path.join(__dirname, outputFileName);

  const fileStream = fs.createReadStream(inputFilePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const jsonArray = [];
  
  for await (const line of rl) {
    try {
      const jsonObject = JSON.parse(line);
      jsonArray.push(jsonObject);
    } catch (err) {
      console.error(`Error parsing JSONL line: ${line}`);
    }
  }

  fs.writeFile(outputFilePath, JSON.stringify(jsonArray, null, 2), (err) => {
    if (err) {
      console.error('Error writing to JSON file:', err);
    } else {
      console.log(`Successfully converted ${inputFileName} to ${outputFileName}`);
    }
  });
};

// Usage: replace 'input.jsonl' and 'output.json' with your file names
convertJsonlToJson('books.jsonl', 'books1.json');
