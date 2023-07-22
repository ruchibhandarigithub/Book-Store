// Navbar.js
import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <div>
      {/* Your navigation elements */}
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
