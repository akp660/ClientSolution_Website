import React, { useEffect, useRef, useState } from 'react';
import './Process.css';

const processSteps = [
  {
    step: '1',
    title: 'Understand Your Business',
    desc: 'We analyze your business processes, goals, and challenges.'
  },
  {
    step: '2',
    title: 'Plan the Solution',
    desc: 'Our team designs the best software architecture and user experience.'
  },
  {
    step: '3',
    title: 'Develop & Test',
    desc: 'We build your solution using modern technologies and thoroughly test every feature.'
  },
  {
    step: '4',
    title: 'Launch & Support',
    desc: 'We deploy the software and provide ongoing maintenance and support.'
  }
];

const Process = () => {
  const sectionRef = useRef(null);
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const stepElements = sectionRef.current?.querySelectorAll('.process-step');
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section process-section" id="how-it-works" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center">
          <h2>How We <span>Work</span></h2>
          <p>Our proven 4-step process ensures successful software delivery.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((item, index) => {
            const isVisible = visibleSteps.includes(index);
            return (
              <div 
                className={`process-step ${isVisible ? 'is-visible' : ''}`} 
                key={index}
                data-index={index}
                style={{ '--step-delay': `${index * 0.25}s` }}
              >
                <div className="step-number">{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
