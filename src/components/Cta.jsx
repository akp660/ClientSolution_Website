import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="section cta-section" id="contact">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <div className="cta-pill">FREE ARCHITECTURE REVIEW</div>
            <h2>Ready to Build Software That Drives <span>Real Business Growth?</span></h2>
            <p>Whether you need a custom CRM, automated billing engine, cloud web app, or mobile app, our engineering team is ready to deliver.</p>
            <div className="cta-button-group">
              <a href="mailto:contact@clientsolution.ai" className="btn-primary cta-btn">
                <span>Schedule a Free Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#services" className="btn-secondary cta-btn-ghost">
                <span>View Our Solutions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <div className="testimonial-header">
            <h3>Trusted by Business Leaders & Enterprise Partners</h3>
            <p>See how our custom software solutions drive measurable growth for our clients.</p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="quote-text">
                "Client Solution.ai transformed our customer management and billing workflows. Their custom platform boosted our team productivity by 40% in just two months."
              </p>
              <div className="testimonial-footer">
                <div className="author">
                  <h4>Sarah Jenkins</h4>
                  <p>VP Operations, Acme Logistics</p>
                </div>
                <div className="trust-rating">
                  Verified 5.0 Partner
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="quote-text">
                "The automated invoice engine they built eliminated billing delays completely. Reconciling accounts used to take days, now it happens automatically in seconds."
              </p>
              <div className="testimonial-footer">
                <div className="author">
                  <h4>David Miller</h4>
                  <p>CTO, TechNova Global</p>
                </div>
                <div className="trust-rating">
                  Verified 5.0 Partner
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="quote-text">
                "Working with Client Solution.ai was seamless from architectural review to cloud deployment. They delivered our cross-platform app 2 weeks ahead of schedule."
              </p>
              <div className="testimonial-footer">
                <div className="author">
                  <h4>Elena Rostova</h4>
                  <p>Head of Product, Bright Solutions</p>
                </div>
                <div className="trust-rating">
                  Verified 5.0 Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

