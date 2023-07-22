// MoreBooks.js
import React from 'react';

const MoreBooks = ({ books }) => {
  return (
    <div>
      <h2>More Books</h2>
      <div>
        {books.map((book) => (
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        ))}
      </div>
    </div>
  );
};

export default MoreBooks;
