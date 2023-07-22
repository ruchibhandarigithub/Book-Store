// BookGrid.js
import React from 'react';
import BookCard from './BookCard';

const BookGrid = ({ books, onBookClick }) => {
  return (
    <div className='book-grid'>
      {books.map((book) => (
        <BookCard key={book.id} book={book} onBookClick={onBookClick} />
      ))}
    </div>
  );
};

export default BookGrid;
