// App.js (updated)
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookGrid from './components/BookGrid';
import MoreBooks from './components/MoreBooks';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from Google Books API (e.g., Harry Potter and Sherlock Holmes)
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

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <BookGrid books={books.slice(0, 3)} />
      <MoreBooks books={books.slice(3)} />
    </div>
  );
};

export default App;
