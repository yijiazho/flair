from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Load the embeddings and descriptions
with open('embeddings.pkl', 'rb') as f:
    embeddings, descriptions = pickle.load(f)

# Load the FAISS index
index = faiss.read_index('index.faiss')

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify([])

    # Generate the embedding for the query
    query_embedding = model.encode([query])

    # Search the FAISS index
    _, indices = index.search(np.array(query_embedding), k=5)
    results = [descriptions[i] for i in indices[0]]

    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
