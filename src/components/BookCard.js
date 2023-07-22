// BookCard.js
import React from 'react';

const BookCard = ({ book, onBookClick }) => {
  const handleClick = () => {
    onBookClick(book);
  };

  return (
    <div className='book-card' onClick={handleClick}>
      <div className='book-card-image'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        </div>
      <div class="book-card-content">
          <h3>{book.volumeInfo.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. 
          
             </p>
          <button onClick={onBookClick}>Read more</button>
      </div>

    </div>
  );
};

export default BookCard;
