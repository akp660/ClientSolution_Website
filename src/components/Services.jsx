import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'CRM Development',
    category: 'Sales & Growth',
    description: 'Manage leads, customer relations, sales pipelines, and team performance in one intelligent platform.',
    features: ['Pipeline Automation', 'Lead Scoring', 'Analytics Dashboard'],
    badge: 'Popular',
    theme: 'theme-purple',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Billing & Invoicing',
    category: 'Finance & Ops',
    description: 'Automate invoices, recurring subscriptions, payment collection, and financial audit logs seamlessly.',
    features: ['Auto Invoicing', 'Payment Gateways', 'Tax Calculation'],
    badge: 'Automation',
    theme: 'theme-emerald',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="2" y1="10" x2="22" y2="10"></line>
        <path d="M7 15h.01M11 15h2"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Web App Development',
    category: 'Cloud Engineering',
    description: 'Custom high-speed web apps tailored to streamline complex business logic and engage modern users.',
    features: ['Modern Frameworks', 'API Integration', 'Cloud Scalability'],
    badge: 'High Scale',
    theme: 'theme-blue',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 4,
    title: 'Mobile App Development',
    category: 'iOS & Android',
    description: 'Native and cross-platform mobile apps crafted for effortless user experience and offline efficiency.',
    features: ['Cross-Platform', 'Offline Sync', 'Push Notifications'],
    badge: 'Mobile Native',
    theme: 'theme-pink',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    id: 5,
    title: 'Custom Software Architecture',
    category: 'Enterprise Solution',
    description: 'Bespoke software platforms built ground-up to solve unique operational bottlenecks and domain needs.',
    features: ['Modular Code', 'Database Optimization', 'Legacy Upgrades'],
    badge: 'Tailored',
    theme: 'theme-violet',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    id: 6,
    title: 'AI & Data Integration',
    category: 'Smart Automation',
    description: 'Empower your software with intelligent AI workflows, automated insights, and smart data analytics.',
    features: ['AI Workflows', 'Smart Search', 'Real-Time Insights'],
    badge: 'Next-Gen',
    theme: 'theme-amber',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="section services" id="products">
      {/* Background Ambient Accents */}
      <div className="services-bg-glow glow-1"></div>
      <div className="services-bg-glow glow-2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2>
            Software Solutions That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p>
            We build simple, reliable, and scalable software engineered for small and mid-size businesses to accelerate digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map(service => (
            <div className={`service-card ${service.theme}`} key={service.id}>
              {/* Card Ambient Glow Spot */}
              <div className="card-hover-glow"></div>

              {/* Card Top Row: Badge & Category */}
              <div className="service-card-top">
                <span className="category-tag">{service.category}</span>
                {service.badge && <span className="badge-pill">{service.badge}</span>}
              </div>

              {/* Icon Container */}
              <div className="service-icon-wrapper">
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              {/* Card Title & Description */}
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              {/* Feature Pills */}
              <div className="service-features">
                {service.features.map((feat, idx) => (
                  <span key={idx} className="feature-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feat}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <a href="#contact" className="service-link">
                <span>Explore Solution</span>
                <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

