// App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid';
import BookDetail from './components/BookDetail';
import MoreBooks from './components/MoreBooks';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Fetch data from Google Books API for initial queries
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  }, []);

  const handleSearch = (query) => {
    // Fetch data from Google Books API based on the user's query
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={handleCloseBookDetail} />
      ) : (
        <BookGrid books={books.slice(0, 3)} onBookClick={handleBookClick} />
      )}
      <MoreBooks books={books.slice(3)} />
    </div>
  );
};

export default App;
