import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-box" id="contact">
          <div className="cta-content">
            <h2>Ready to Build Software That Works for <span>Your Business?</span></h2>
            <p>Whether you need a CRM, billing platform, mobile application, or a fully customized business solution, we're ready to help.</p>
            <div style={{display: 'flex', gap: '16px'}}>
              <button className="btn-primary">Schedule a Free Consultation</button>
              <button className="btn-secondary" style={{backgroundColor: 'rgba(255,255,255,0.2)', color: 'white'}}>Contact Us</button>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <div className="testimonial-card">
            <div className="quote-icon">❝</div>
            <p className="quote-text">
              "Client Solutions.Ai transformed our customer management process. Their CRM solution helped us improve team productivity and track sales more effectively."
            </p>
            <div className="author">
              <h4>Business Owner</h4>
              <p>Operations Manager</p>
            </div>
            <div className="trust-rating">
              <span className="star">★</span> Verified Client
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
