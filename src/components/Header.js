// components/Header.js
import React from "react";
import "./Header.css"; // Add animations for search and icons

const Header = () => {
  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
      />
      <div className="icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
