// Navbar.js
import React from 'react';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='logo-image.png'/>
        <img src='KeazoNBOOKS.png'/>
        
      </div>

      <SearchBar onSearch={onSearch} />
      <div className='logo2'>
        <img src='bx_bx-book-heart@2x.png'/>
        <img src='fluent_premium-person-20-regular.png'/>
        <img src='ic_round-notifications-none.png'/>
        <img src='IMG20210528181544.png'/>
        
        
      </div>

    </div>
  );
};

export default Navbar;
