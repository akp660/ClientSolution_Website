import React from 'react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'CRM Development',
    description: 'Manage leads, customers, sales pipelines and team activities in one place.',
    icon: '👥'
  },
  {
    id: 2,
    title: 'Billing & Invoicing Software',
    description: 'Automate invoices, payments and financial records with accuracy.',
    icon: '📄'
  },
  {
    id: 3,
    title: 'Web Application Development',
    description: 'Custom web applications to automate processes and improve efficiency.',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Powerful mobile apps for Android and iOS that engage your users.',
    icon: '📱'
  },
  {
    id: 5,
    title: 'Custom Software',
    description: 'Tailored software solutions built specifically for your unique needs.',
    icon: '</>'
  }
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Software Solutions That <span>Drive Growth</span></h2>
          <p>We build simple, reliable and scalable software for small and mid-size businesses.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
