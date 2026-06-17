import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">🚀 Custom Software Solutions for Growing Businesses</div>
          <h1 className="hero-title">
            Build Better Business Software with <span>Client Solution.ai</span>
          </h1>
          <p className="hero-subtitle">
            We help small and mid-sized businesses streamline operations with custom CRM systems, billing software, web applications, and mobile apps designed specifically for their workflows.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get Free Consultation →</button>
            <button className="btn-secondary" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>▶ View Our Services</button>
          </div>
          <div className="hero-features-list">
            <span>✓ Custom Solutions</span>
            <span>✓ On-Time Delivery</span>
            <span>✓ Reliable Support</span>
          </div>
        </div>

        <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Dashboard Mockup */}
          <div className="mockup-dashboard">
            <div className="dash-sidebar">
              <div className="dash-logo"></div>
              <div className="dash-nav-item active"></div>
              <div className="dash-nav-item"></div>
              <div className="dash-nav-item"></div>
              <div className="dash-nav-item"></div>
            </div>
            <div className="dash-main">
              <div className="dash-header">
                <div className="dash-title">Dashboard</div>
                <div className="dash-header-right">
                  <div className="dash-search">Search...</div>
                  <div className="dash-avatar"></div>
                </div>
              </div>
              <div className="dash-content">
                <div className="dash-row">
                  <div className="dash-card primary-grad">
                    <h5>Total Revenue</h5>
                    <h3>$45,231.89</h3>
                    <p>↑ 12.5% from last month</p>
                  </div>
                  <div className="dash-card">
                    <h5>New Customers</h5>
                    <h3>1,245</h3>
                    <p style={{color: '#00b67a'}}>↑ 8.2% from last month</p>
                  </div>
                  <div className="dash-card tasks-card">
                    <h5>Tasks</h5>
                    <ul>
                      <li><span className="chk done"></span> Follow up with leads</li>
                      <li><span className="chk"></span> Send Proposal</li>
                      <li><span className="chk"></span> Invoice #INV-00123</li>
                    </ul>
                  </div>
                </div>
                <div className="dash-row">
                  <div className="dash-card flex-2">
                    <h5>Recent Invoices</h5>
                    <div className="dash-table">
                      <div className="dash-tr"><span>INV-00123</span><span>Acme Corp</span><span className="status paid">Paid</span><span>$1,250.00</span></div>
                      <div className="dash-tr"><span>INV-00122</span><span>Bright Solutions</span><span className="status paid">Paid</span><span>$950.00</span></div>
                      <div className="dash-tr"><span>INV-00121</span><span>TechNova Inc.</span><span className="status pending">Pending</span><span>$2,300.00</span></div>
                    </div>
                  </div>
                  <div className="dash-card">
                    <h5>Sales Overview</h5>
                    <div className="dash-chart">
                      <div className="donut"></div>
                      <div className="chart-legend">
                        <div><span className="dot p"></span> CRM</div>
                        <div><span className="dot b"></span> Web Apps</div>
                        <div><span className="dot g"></span> Billing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="floating-card crm-float">
            <div className="icon-small purple-bg">📊</div>
            <div>
              <h4>Custom CRM</h4>
              <p>Manage leads & customers</p>
            </div>
          </div>
          <div className="floating-card billing-float">
            <div className="icon-small blue-bg">📄</div>
            <div>
              <h4>Billing Software</h4>
              <p>Automate invoices</p>
            </div>
          </div>
          <div className="floating-card web-float">
            <div className="icon-small pink-bg">💻</div>
            <div>
              <h4>Web & Mobile Apps</h4>
              <p>Scalable & secure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
