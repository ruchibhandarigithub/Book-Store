// MoreBooks.js
import React from 'react';

const MoreBooks = ({ books }) => {
  return (
    <div className='more'>
      <h2>More Books</h2>
      <div className='more-books'>
        {books.map((book) => (
          <img key={book.id} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        ))}
      </div>
    </div>
  );
};

export default MoreBooks;
