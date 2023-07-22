// BookCard.js
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors.join(', ')}</p>
      {/* Add more elements as per the Figma design */}
    </div>
  );
};

export default BookCard;
