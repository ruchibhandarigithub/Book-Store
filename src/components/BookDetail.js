// BookDetail.js
import React from 'react';

const BookDetail = ({ book, onClose }) => {
  return (
    <div className='book-card'>
       <div className='book-detail-image'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
        <div class='book-detail-content'>
        <h2>{book.volumeInfo.title}</h2>
        <p>Author: {book.volumeInfo.authors.join(', ')}</p>
        <p>Published Date: {book.volumeInfo.publishedDate}</p>
        <p>Description: {book.volumeInfo.description}</p>
        <button onClick={onClose}>Close</button>
        <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
        <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
        </div>
    </div>
  );
};

export default BookDetail;
