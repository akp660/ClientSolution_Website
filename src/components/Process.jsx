import React, { useEffect, useRef, useState } from 'react';
import './Process.css';

const processSteps = [
  {
    step: '01',
    title: 'Understand Your Business',
    phase: 'Discovery & Analysis',
    desc: 'We analyze your business processes, target goals, operational bottlenecks, and technical requirements.',
    deliverables: ['Requirements Mapping', 'Workflow Audit', 'Project Roadmap'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <line x1="11" y1="8" x2="11" y2="14"></line>
        <line x1="8" y1="11" x2="14" y2="11"></line>
      </svg>
    )
  },
  {
    step: '02',
    title: 'Plan the Solution',
    phase: 'Architecture & Blueprint',
    desc: 'Our team designs intuitive UI/UX prototypes, system architecture, and robust database models.',
    deliverables: ['UI/UX Wireframes', 'Tech Architecture', 'API Specification'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    )
  },
  {
    step: '03',
    title: 'Develop & Test',
    phase: 'Agile Engineering & QA',
    desc: 'We build your solution using modern technologies, executing automated tests to ensure precision.',
    deliverables: ['Agile Sprints', 'Automated QA', 'CI/CD Pipelines'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
        <line x1="10" y1="20" x2="14" y2="4"></line>
      </svg>
    )
  },
  {
    step: '04',
    title: 'Launch & Support',
    phase: 'Deployment & Scaling',
    desc: 'We deploy the software to cloud infrastructure and provide 24/7 maintenance, SLA support, and updates.',
    deliverables: ['Cloud Deployment', '24/7 Monitoring', 'SLA Maintenance'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12l-5 5"></path>
        <path d="M12 15l5 5"></path>
      </svg>
    )
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([0, 1, 2, 3]);

  useEffect(() => {
    const stepElements = sectionRef.current?.querySelectorAll('.process-step-card');
    if (!stepElements || stepElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.05 }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = Number(((centerY - y) / centerY * 8).toFixed(2));
    const rotateY = Number(((x - centerX) / centerX * 8).toFixed(2));

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-x', `0deg`);
    card.style.setProperty('--rotate-y', `0deg`);
    card.style.setProperty('--mouse-x', `50%`);
    card.style.setProperty('--mouse-y', `50%`);
  };

  return (
    <section className="section process-section" id="how-it-works" ref={sectionRef}>
      {/* Background Ambient Glow Accents */}
      <div className="process-bg-glow glow-top"></div>
      <div className="process-bg-glow glow-bottom"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2>
            How We <span className="gradient-text">Work</span>
          </h2>
          <p>
            Our battle-tested 4-step engineering process guarantees transparent delivery, high quality, and fast time-to-market.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="process-timeline">
          <div className="process-grid">
            {processSteps.map((item, index) => {
              const isVisible = visibleSteps.includes(index);
              return (
                <div 
                  className={`process-step-card ${isVisible ? 'is-visible' : ''}`} 
                  key={index}
                  data-index={index}
                  style={{ '--step-delay': `${index * 0.15}s` }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dynamic Mouse Cursor Glow Spotlight */}
                  <div className="card-mouse-spotlight"></div>

                  {/* Header Row: Step Badge & Icon */}
                  <div className="step-card-header">
                    <div className="step-badge">STEP {item.step}</div>
                    <div className="step-icon-box">
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Phase Label */}
                  <div className="step-phase">{item.phase}</div>

                  {/* Title & Description */}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  {/* Deliverable Tags */}
                  <div className="step-deliverables">
                    {item.deliverables.map((deliv, dIdx) => (
                      <span key={dIdx} className="deliverable-tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {deliv}
                      </span>
                    ))}
                  </div>

                  {/* Active Bottom Glow Accent Line */}
                  <div className="card-bottom-indicator"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;


