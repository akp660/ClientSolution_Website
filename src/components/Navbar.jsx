import React from 'react';
import './Navbar.css';

const Navbar = ({ onBackToLanding, fixed }) => {
  return (
    <header className={`navbar${fixed ? ' navbar--fixed' : ''}`}>
      <div className="container navbar-container">
        
        {/* Brand Logo */}
        <div 
          className="logo"
          onClick={onBackToLanding}
          style={{ cursor: 'pointer' }}
        >
          Client Solution
        </div>

        <nav className="nav-links">
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
