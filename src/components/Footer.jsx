import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Client Solution<span>.ai</span></div>
            <p>Building smart software solutions for growing businesses.</p>
            <p style={{marginTop: '12px', fontSize: '13px', color: 'var(--primary)'}}>CRM • Billing Software • Web Applications • Mobile Apps • Custom Software Development</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Contact</h4>
              <a className="social-link mail-link" href="mailto:bbsoftwarecompany@gmail.com">
                <svg className="social-icon mail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-7.4 4.65a1 1 0 0 1-1.2 0L4 8.2V6h16v2.2Zm0 9.8H4V10.54l6.86 4.3a3 3 0 0 0 3.28 0L20 10.54V18Z" />
                </svg>
                <span>bbsoftwarecompany</span>
              </a>
              <a className="social-link linkedin-link" href="https://www.linkedin.com/company/client-solution-ai/" target="_blank" rel="noreferrer">
                <svg className="social-icon linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.67-1.85 3.44-1.85 3.68 0 4.36 2.42 4.36 5.57v6.17ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77A1.74 1.74 0 0 0 0 1.72v20.56A1.74 1.74 0 0 0 1.77 24h20.45A1.75 1.75 0 0 0 24 22.28V1.72A1.75 1.75 0 0 0 22.22 0Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
            {/* <div className="link-group">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">Process</a>
            </div> */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Client Solution.ai. All rights reserved.</p>
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
