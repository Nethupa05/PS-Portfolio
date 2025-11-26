// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Professional Skills Portfolio</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;