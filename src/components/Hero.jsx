import React, { useState } from 'react';
import ConsultationModal from './ConsultationModal';
import './Hero.css';

const Hero = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [timeframe, setTimeframe] = useState('weekly');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <h1 className="hero-title">
            Software Solutions That Drive <span className="hero-gradient-text">Growth &amp; Scale</span> Operations
          </h1>

          <p className="hero-subtitle">
            We build simple, reliable, and scalable software platforms — from custom CRMs and billing engines to web and mobile apps designed around your unique business workflows.
          </p>

          <div className="hero-actions">
            <button 
              type="button" 
              className="btn-primary hero-btn-main" 
              onClick={() => setIsConsultationOpen(true)}
            >
              <span>Get Free Consultation</span>
              <svg className="btn-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <a href="#download" className="btn-secondary hero-btn-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Now</span>
            </a>
          </div>

          <div className="hero-trust-highlights">
            <span className="trust-item"><i className="trust-check">✓</i> Custom Architecture</span>
            <span className="trust-item"><i className="trust-check">✓</i> Fast Delivery</span>
            <span className="trust-item"><i className="trust-check">✓</i> 24/7 Dedicated Support</span>
          </div>
        </div>

        {/* Dashboard Stage */}
        <div 
          className="hero-visual animate-fade-in-up" 
          style={{ animationDelay: '0.2s' }}
        >
          <div className="hero-dashboard-shell">
            <div className="hero-dashboard-glow hero-dashboard-glow-left"></div>
            <div className="hero-dashboard-glow hero-dashboard-glow-right"></div>

            <div className="hero-dashboard-card">
              {/* Sidebar Menu */}
              <aside className="hero-sidebar">
                <div className="hero-sidebar-brand">
                  <div className="hero-brand-mark">
                    <span></span>
                  </div>
                  <div>
                    <h4>Client Solution</h4>
                    <p>Platform v2.4</p>
                  </div>
                </div>

                <div className="hero-sidebar-section">
                  <span className="hero-sidebar-label">Menu</span>
                  <button 
                    type="button"
                    className={`hero-sidebar-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('dashboard')}
                  >
                    <span className="hero-sidebar-dot"></span>
                    <span>Dashboard</span>
                  </button>
                  <button 
                    type="button"
                    className={`hero-sidebar-item ${activeMenu === 'clients' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('clients')}
                  >
                    <span className="hero-sidebar-dot"></span>
                    <span>Clients</span>
                  </button>
                  <button 
                    type="button"
                    className={`hero-sidebar-item ${activeMenu === 'invoices' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('invoices')}
                  >
                    <span className="hero-sidebar-dot"></span>
                    <span>Invoices</span>
                  </button>
                </div>
              </aside>

              {/* Main Dashboard Area */}
              <div className="hero-dashboard-main">
                <div className="hero-topbar">
                  <div className="hero-searchbar">
                    <span className="hero-search-icon">⌕</span>
                    <span>Search client, invoice, or revenue...</span>
                  </div>
                  <div className="hero-topbar-actions">
                    <button 
                      type="button"
                      className={`hero-chip ${timeframe === 'weekly' ? 'active' : ''}`}
                      onClick={() => setTimeframe('weekly')}
                    >
                      Weekly
                    </button>
                    <button 
                      type="button"
                      className={`hero-chip ${timeframe === 'monthly' ? 'active' : ''}`}
                      onClick={() => setTimeframe('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* TAB 1: DASHBOARD VIEW */}
                {activeMenu === 'dashboard' && (
                  <>
                    <div className="hero-main-title">
                      Analytics Dashboard <span className="live-tag">● Live</span>
                    </div>

                    <div className="hero-summary-grid">
                      <div className="hero-summary-card hero-summary-card-highlight">
                        <p>Total Revenue</p>
                        <h3>{timeframe === 'weekly' ? '$12,450.00' : '$45,230.89'}</h3>
                        <span>+14.8% vs previous period</span>
                      </div>
                      <div className="hero-summary-card">
                        <p>Active Clients</p>
                        <h3>{timeframe === 'weekly' ? '184' : '564'}</h3>
                        <span>Verified Accounts</span>
                      </div>
                      <div className="hero-summary-card hero-summary-card-soft">
                        <p>Invoices Cleared</p>
                        <h3>{timeframe === 'weekly' ? '92%' : '98.5%'}</h3>
                        <span>Auto-reconciled</span>
                      </div>
                    </div>

                    <div className="hero-dashboard-grid">
                      <section className="hero-panel hero-panel-chart">
                        <div className="hero-panel-header">
                          <h4>Revenue Overview ({timeframe === 'weekly' ? 'This Week' : 'This Month'})</h4>
                          <div className="hero-legend-inline">
                            <span><i className="legend-dot legend-blue"></i>CRM Sales</span>
                            <span><i className="legend-dot legend-pink"></i>Invoicing</span>
                            <span><i className="legend-dot legend-peach"></i>Apps</span>
                          </div>
                        </div>
                        <div className="hero-bars" aria-hidden="true">
                          <span style={{ height: timeframe === 'weekly' ? '56%' : '76%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '72%' : '88%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '64%' : '70%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '84%' : '94%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '58%' : '80%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '76%' : '85%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '62%' : '78%' }}></span>
                          <span style={{ height: timeframe === 'weekly' ? '69%' : '90%' }}></span>
                        </div>
                      </section>

                      <section className="hero-panel hero-panel-overview">
                        <div className="hero-panel-header">
                          <h4>System Load</h4>
                          <span className="hero-kebab">···</span>
                        </div>
                        <div className="hero-ring-chart">
                          <div className="hero-ring hero-ring-blue"></div>
                          <div className="hero-ring hero-ring-mid"></div>
                          <div className="hero-ring hero-ring-pink"></div>
                          <div className="hero-ring-center">
                            <strong>Efficiency</strong>
                            <span>99.9%</span>
                          </div>
                        </div>
                      </section>
                    </div>
                  </>
                )}

                {/* TAB 2: CLIENTS VIEW */}
                {activeMenu === 'clients' && (
                  <div className="hero-tab-content">
                    <div className="hero-main-title">
                      Enterprise Client Accounts <span className="live-tag">● 1,240 Active Accounts</span>
                    </div>

                    <div className="hero-contacts-table">
                      <div className="table-header-row">
                        <span>Client / Company</span>
                        <span>Platform Plan</span>
                        <span>MRR</span>
                        <span>Account Status</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle purple-avatar">AC</div>
                          <div>
                            <strong>Acme Logistics Corp</strong>
                            <small>sarah@acmelogistics.com</small>
                          </div>
                        </div>
                        <span className="stage-badge">Enterprise CRM</span>
                        <strong>$2,400 / mo</strong>
                        <span className="status-pill status-green">Active Account</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle blue-avatar">TN</div>
                          <div>
                            <strong>TechNova Global</strong>
                            <small>david@technova.io</small>
                          </div>
                        </div>
                        <span className="stage-badge">Custom Billing</span>
                        <strong>$4,800 / mo</strong>
                        <span className="status-pill status-blue">Active Account</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle pink-avatar">BS</div>
                          <div>
                            <strong>Bright Solutions</strong>
                            <small>info@brightsol.com</small>
                          </div>
                        </div>
                        <span className="stage-badge">Web & Mobile</span>
                        <strong>$3,200 / mo</strong>
                        <span className="status-pill status-amber">Onboarding</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle green-avatar">AD</div>
                          <div>
                            <strong>Apex Digital Systems</strong>
                            <small>alex@apexdigital.com</small>
                          </div>
                        </div>
                        <span className="stage-badge">Cloud Platform</span>
                        <strong>$5,600 / mo</strong>
                        <span className="status-pill status-green">Active Account</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle purple-avatar">VH</div>
                          <div>
                            <strong>Vanguard Health Systems</strong>
                            <small>contact@vanguardhealth.org</small>
                          </div>
                        </div>
                        <span className="stage-badge">Custom ERP</span>
                        <strong>$7,500 / mo</strong>
                        <span className="status-pill status-blue">Active Account</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: INVOICES VIEW */}
                {activeMenu === 'invoices' && (
                  <div className="hero-tab-content">
                    <div className="hero-main-title">
                      Billing & Invoice Ledger <span className="live-tag">● 482 Invoices Issued</span>
                    </div>

                    <div className="hero-contacts-table">
                      <div className="table-header-row">
                        <span>Invoice ID / Client</span>
                        <span>Issue Date</span>
                        <span>Amount</span>
                        <span>Payment Status</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle green-avatar">INV</div>
                          <div>
                            <strong>#INV-2026-089</strong>
                            <small>Acme Logistics Corp</small>
                          </div>
                        </div>
                        <span className="stage-badge">Sep 01, 2026</span>
                        <strong>$12,450.00</strong>
                        <span className="status-pill status-green">Paid (Auto)</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle blue-avatar">INV</div>
                          <div>
                            <strong>#INV-2026-088</strong>
                            <small>TechNova Global</small>
                          </div>
                        </div>
                        <span className="stage-badge">Aug 28, 2026</span>
                        <strong>$8,900.00</strong>
                        <span className="status-pill status-blue">Paid (Card)</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle pink-avatar">INV</div>
                          <div>
                            <strong>#INV-2026-087</strong>
                            <small>Bright Solutions</small>
                          </div>
                        </div>
                        <span className="stage-badge">Aug 25, 2026</span>
                        <strong>$14,200.00</strong>
                        <span className="status-pill status-amber">Pending (Net 30)</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle green-avatar">INV</div>
                          <div>
                            <strong>#INV-2026-086</strong>
                            <small>Apex Digital Systems</small>
                          </div>
                        </div>
                        <span className="stage-badge">Aug 20, 2026</span>
                        <strong>$6,750.00</strong>
                        <span className="status-pill status-green">Paid (ACH)</span>
                      </div>
                      <div className="table-data-row">
                        <div className="contact-info">
                          <div className="avatar-circle purple-avatar">INV</div>
                          <div>
                            <strong>#INV-2026-085</strong>
                            <small>Vanguard Health Systems</small>
                          </div>
                        </div>
                        <span className="stage-badge">Aug 15, 2026</span>
                        <strong>$18,300.00</strong>
                        <span className="status-pill status-blue">Paid (Auto)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Levitating Floating Metric Widgets - Only show on Dashboard tab */}
            {activeMenu === 'dashboard' && (
              <>
                <div className="hero-float-card hero-float-overview">
                  <div className="hero-float-pill">System Performance</div>
                  <div className="hero-float-metric">
                    <span>99.9%</span>
                    <small>Guaranteed Uptime SLA</small>
                  </div>
                </div>

                <div className="hero-float-card hero-float-progress">
                  <div>
                    <strong>Agile Delivery</strong>
                    <p>98% On-Time Completion</p>
                  </div>
                  <div className="hero-progress-circle">100%</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Bottom-Right Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </section>
  );
};

export default Hero;

