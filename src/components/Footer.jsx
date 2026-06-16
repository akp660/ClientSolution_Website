import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Client Company<span>.ai</span></div>
            <p>Building smart software solutions for growing businesses.</p>
            <p style={{marginTop: '12px', fontSize: '13px', color: 'var(--primary)'}}>CRM • Billing Software • Web Applications • Mobile Apps • Custom Software Development</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Contact</h4>
              <a href="mailto:hello@clientcompany.ai">📧 hello@clientcompany.ai</a>
              <a href="tel:+91XXXXXXXXXX">📞 +91 XXXXX XXXXX</a>
              <a href="https://www.clientcompany.ai">🌐 www.clientcompany.ai</a>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">Process</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Client Company.ai. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
