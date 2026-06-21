import React from 'react';
import './Navbar.css';

const Navbar = ({ onBackToLanding }) => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div 
          className="logo"
          onClick={onBackToLanding}
          style={{ cursor: 'pointer' }}
        >
          Client Solution<span>.ai</span>
        </div>
        <nav className="nav-links">
          {/* <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          
          <a href="#about">About</a>
          <a href="#contact">Contact</a> */}
        </nav>
        <div className="nav-actions">
          <button className="btn-primary">Get Consultation</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
