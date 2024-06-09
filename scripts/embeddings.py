from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
import pickle

# Sample asset descriptions
descriptions = [
    'A beautiful sunset over the mountains.',
    'The skyline of a bustling city at night.',
    'A tranquil path through a dense forest.',
    'Sweeping dunes in a vast desert.'
]

# Load the pre-trained model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Generate embeddings
embeddings = model.encode(descriptions)

# Save embeddings and descriptions
with open('embeddings.pkl', 'wb') as f:
    pickle.dump((embeddings, descriptions), f)

# Create a FAISS index
index = faiss.IndexFlatL2(embeddings.shape[1])
index.add(np.array(embeddings))

# Save the FAISS index
faiss.write_index(index, 'index.faiss')
