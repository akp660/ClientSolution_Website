import React from 'react';
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
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2>How We <span>Work</span></h2>
          <p>Our proven 4-step process ensures successful software delivery.</p>
        </div>

        <div className="process-grid">
          {processSteps.map((item, index) => (
            <div className="process-step" key={index}>
              <div className="step-number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
