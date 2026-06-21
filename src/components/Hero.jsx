import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e) => {
      const step = 10;
      setCursorPos((prev) => {
        let newPos = { ...prev };
        if (e.key === 'ArrowUp') newPos.y -= step;
        if (e.key === 'ArrowDown') newPos.y += step;
        if (e.key === 'ArrowLeft') newPos.x -= step;
        if (e.key === 'ArrowRight') newPos.x += step;
        return newPos;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="hero">
      <div className="tracking-circle" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          {/* <div className="hero-badge">🚀 Custom Software Solutions for Growing Businesses</div> */}
          <h1 className="hero-title">
            Build Better Business Software with <span>Client Solution.ai</span>
          </h1>
          {/* <p className="hero-subtitle">
            We help small and mid-sized businesses streamline operations with custom CRM systems, billing software, web applications, and mobile apps designed specifically for their workflows.
          </p> */}
          {/* <div className="hero-actions">
            <button className="btn-primary">Get Free Consultation →</button>
            <button className="btn-secondary" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>▶ View Our Services</button>
          </div> */}
          {/* <div className="hero-features-list">
            <span>✓ Custom Solutions</span>
            <span>✓ On-Time Delivery</span>
            <span>✓ Reliable Support</span>
          </div> */}
        </div>

        <div className="hero-mobile-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-phone-shell">
            <div className="hero-phone-status">
              <span>9:41</span>
              <div className="hero-phone-status-icons">
                <span>◔</span>
                <span>◔◔</span>
                <span>▮▮▮</span>
              </div>
            </div>

            <div className="hero-phone-header">
              <div>
                <h3>Dashboard</h3>
                <p>Project Summary</p>
              </div>
              <div className="hero-phone-header-actions">
                <div className="hero-phone-avatar">CS</div>
                <div className="hero-phone-bell">🔔</div>
              </div>
            </div>

            <div className="hero-phone-pills">
              <span className="hero-phone-pill active">Overview</span>
              <span className="hero-phone-pill">Tasks</span>
              <span className="hero-phone-pill">Reports</span>
            </div>

            <div className="hero-phone-grid">
              <article className="hero-phone-card hero-phone-card-purple">
                <div className="hero-phone-card-value">24</div>
                <div className="hero-phone-card-label">In Progress</div>
              </article>
              <article className="hero-phone-card hero-phone-card-pink">
                <div className="hero-phone-card-value">56</div>
                <div className="hero-phone-card-label">In Review</div>
              </article>
              <article className="hero-phone-card hero-phone-card-amber">
                <div className="hero-phone-card-value">16</div>
                <div className="hero-phone-card-label">On Hold</div>
              </article>
              <article className="hero-phone-card hero-phone-card-green">
                <div className="hero-phone-card-value">45</div>
                <div className="hero-phone-card-label">Completed</div>
              </article>
            </div>

            <div className="hero-phone-chart-card">
              <div className="hero-phone-section-title">
                <h4>Project Statistics</h4>
                <span>⋯</span>
              </div>
              <div className="hero-phone-bars" aria-hidden="true">
                <span style={{ height: '24%' }}></span>
                <span style={{ height: '58%' }}></span>
                <span style={{ height: '34%' }}></span>
                <span style={{ height: '52%' }}></span>
                <span style={{ height: '18%' }}></span>
                <span style={{ height: '46%' }}></span>
                <span style={{ height: '26%' }}></span>
                <span style={{ height: '40%' }}></span>
                {/* Test
                Tset */}
              </div>
              <div className="hero-phone-legend">
                <span><i className="legend-dot legend-blue"></i> Progress</span>
                <span><i className="legend-dot legend-pink"></i> Reviewed</span>
                <span><i className="legend-dot legend-green"></i> Complete</span>
              </div>
            </div>

            <div className="hero-phone-footer-grid">
              <div className="hero-phone-footer-card">
                <p>Total working hour</p>
                <strong>50:25:06</strong>
                <span className="hero-phone-chip hero-phone-chip-green">+ 34%</span>
              </div>
              <div className="hero-phone-footer-card">
                <p>Total task activity</p>
                <strong>125 Task</strong>
                <span className="hero-phone-chip hero-phone-chip-blue">1.50%</span>
              </div>
            </div>

            <div className="hero-phone-nav">
              <span className="active">⌂</span>
              <span>◫</span>
              <span>＋</span>
              <span>◔</span>
              <span>◉</span>
            </div>
          </div>
        </div>

        {/* <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
          </div> */}
          
          {/* Floating elements */}
          {/* <div className="floating-card crm-float">
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
          </div> */}

        <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-dashboard-shell">
            <div className="hero-dashboard-glow hero-dashboard-glow-left"></div>
            <div className="hero-dashboard-glow hero-dashboard-glow-right"></div>

            <div className="hero-dashboard-card">
              <aside className="hero-sidebar">
                <div className="hero-sidebar-brand">
                  <div className="hero-brand-mark">
                    <span></span>
                  </div>
                  <div>
                    <h4>Client Solution</h4>
                    <p>Dashboard</p>
                  </div>
                </div>

                <div className="hero-sidebar-section">
                  <span className="hero-sidebar-label">Menu</span>
                  <div className="hero-sidebar-item active">
                    <span className="hero-sidebar-dot"></span>
                    <span>Dashboard</span>
                  </div>
                  <div className="hero-sidebar-item">
                    <span className="hero-sidebar-dot"></span>
                    <span>Contacts</span>
                  </div>
                  <div className="hero-sidebar-item">
                    <span className="hero-sidebar-dot"></span>
                    <span>Project</span>
                  </div>
                </div>

                <div className="hero-sidebar-section hero-sidebar-section-ghost">
                  <span className="hero-sidebar-label">Pages</span>
                  <div className="hero-sidebar-item">
                    <span className="hero-sidebar-dot"></span>
                    <span>Authentication</span>
                  </div>
                  <div className="hero-sidebar-item">
                    <span className="hero-sidebar-dot"></span>
                    <span>Utility</span>
                  </div>
                </div>
              </aside>

              <div className="hero-dashboard-main">
                <div className="hero-topbar">
                  <div className="hero-searchbar">
                    <span className="hero-search-icon">⌕</span>
                    <span>Search...</span>
                  </div>
                  <div className="hero-topbar-actions">
                    <div className="hero-chip">Weekly</div>
                    <div className="hero-chip hero-chip-ghost">Select date</div>
                  </div>
                </div>

                <div className="hero-main-title">Analytics Dashboard</div>

                <div className="hero-summary-grid">
                  <div className="hero-summary-card hero-summary-card-highlight">
                    <p>Upgrade your Dashcode</p>
                    <h3>Now</h3>
                    <span>Pro plan for better results</span>
                  </div>
                  <div className="hero-summary-card">
                    <p>Total revenue</p>
                    <h3>3,564</h3>
                    <span>Live this month</span>
                  </div>
                  <div className="hero-summary-card hero-summary-card-soft">
                    <p>Products sold</p>
                    <h3>564</h3>
                    <span>+5.0% growth</span>
                  </div>
                </div>

                <div className="hero-dashboard-grid">
                  <section className="hero-panel hero-panel-chart">
                    <div className="hero-panel-header">
                      <h4>Revenue Report</h4>
                      <div className="hero-legend-inline">
                        <span><i className="legend-dot legend-blue"></i>Net profit</span>
                        <span><i className="legend-dot legend-pink"></i>Revenue</span>
                        <span><i className="legend-dot legend-peach"></i>Expense</span>
                      </div>
                    </div>
                    <div className="hero-bars" aria-hidden="true">
                      <span style={{ height: '56%' }}></span>
                      <span style={{ height: '72%' }}></span>
                      <span style={{ height: '64%' }}></span>
                      <span style={{ height: '84%' }}></span>
                      <span style={{ height: '58%' }}></span>
                      <span style={{ height: '76%' }}></span>
                      <span style={{ height: '62%' }}></span>
                      <span style={{ height: '69%' }}></span>
                      <span style={{ height: '54%' }}></span>
                    </div>
                  </section>

                  <section className="hero-panel hero-panel-overview">
                    <div className="hero-panel-header">
                      <h4>Overview</h4>
                      <span className="hero-kebab">···</span>
                    </div>
                    <div className="hero-ring-chart">
                      <div className="hero-ring hero-ring-blue"></div>
                      <div className="hero-ring hero-ring-mid"></div>
                      <div className="hero-ring hero-ring-pink"></div>
                      <div className="hero-ring-center">
                        <strong>Total</strong>
                        <span>250</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="hero-float-card hero-float-overview">
              <div className="hero-float-pill">Overview</div>
              <div className="hero-float-metric">
                <span>80%</span>
                <small>Today</small>
              </div>
            </div>

            <div className="hero-float-card hero-float-progress">
              <div>
                <strong>Progress</strong>
                <p>70% complete</p>
              </div>
              <div className="hero-progress-circle">70%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
