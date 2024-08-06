import React from 'react';
import { Book } from 'src/data/book'

interface BookGridProps {
  books: Book[];
}

const BookGridComponent: React.FC<BookGridProps> = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h2>{book.title}</h2>
          <p><strong>Authors:</strong> {book.authors.join(', ')}</p>
          <p><strong>Publication Year:</strong> {book.publication_year}</p>
          <p><strong>Ratings Count:</strong> {book.ratings_count}</p>
          <p><strong>Average Rating:</strong> {book.average_rating}</p>
        </div>
      ))}
    </div>
  );
};

export default BookGridComponent;
