import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import termsImage from '../assets/terms_image.png';

const sections = [
  { id: 'about',        num: '01', label: 'About Us' },
  { id: 'acceptance',   num: '02', label: 'Acceptance of Terms' },
  { id: 'services',     num: '03', label: 'Services' },
  { id: 'user-resp',    num: '04', label: 'User Responsibilities' },
  { id: 'ip',           num: '05', label: 'Intellectual Property' },
  { id: 'projects',     num: '06', label: 'Client Projects' },
  { id: 'payments',     num: '07', label: 'Payments' },
  { id: 'software',     num: '08', label: 'Software Usage' },
  { id: 'school',       num: '09', label: 'School Management Systems' },
  { id: 'privacy',      num: '10', label: 'Privacy' },
  { id: 'third-party',  num: '11', label: 'Third-Party Services' },
  { id: 'disclaimer',   num: '12', label: 'Disclaimer of Warranties' },
  { id: 'liability',    num: '13', label: 'Limitation of Liability' },
  { id: 'indemnify',    num: '14', label: 'Indemnification' },
  { id: 'termination',  num: '15', label: 'Termination' },
  { id: 'changes',      num: '16', label: 'Changes to These Terms' },
  { id: 'law',          num: '17', label: 'Governing Law' },
  { id: 'contact',      num: '18', label: 'Contact Us' },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.tc-page { width:100%; min-height:100vh; background:#fff; font-family:'Inter',system-ui,sans-serif; text-align:left; color:#3d3d4e; }

/* Hero */
.tc-hero { display:flex; align-items:center; justify-content:space-between; gap:40px; max-width:1100px; margin:0 auto; padding:100px 40px 32px; }
.tc-hero-left { flex:1; max-width:620px; }
.tc-hero-title { font-size:52px; font-weight:800; color:#1a1a2e; letter-spacing:-1.5px; line-height:1.08; margin:0 0 12px; }
.tc-hero-date  { font-size:13px; color:#9ca3af; margin:0 0 20px; font-weight:500; }
.tc-hero-intro { font-size:14px; line-height:1.75; color:#6b7280; margin:0 0 20px; }
.tc-hero-warning {
  display:flex; align-items:flex-start; gap:10px;
  background:rgba(99,102,241,0.06); border:1px solid rgba(99,102,241,0.18);
  border-radius:10px; padding:14px 16px;
}
.tc-hero-warning-icon { width:18px; height:18px; flex-shrink:0; color:#6366f1; margin-top:1px; }
.tc-hero-warning p { font-size:13px; line-height:1.6; color:#6366f1; font-weight:500; margin:0; }

/* Hero right image */
.tc-hero-right { flex-shrink:0; display:flex; flex-direction:column; align-items:center; justify-content:center; }
.tc-hero-img {
  width:460px; max-width:100%; height:auto;
  mix-blend-mode:multiply;
  -webkit-mask-image:radial-gradient(ellipse 85% 85% at 50% 45%, black 55%, transparent 100%);
  mask-image:radial-gradient(ellipse 85% 85% at 50% 45%, black 55%, transparent 100%);
  animation: tc-img-enter 0.8s cubic-bezier(0.22,1,0.36,1) both, tc-img-float 5s ease-in-out 0.8s infinite;
  will-change:transform;
}
.tc-hero-img:hover { animation-play-state:paused; transform:translateY(-6px) scale(1.02); transition:transform 0.4s ease; }
@keyframes tc-img-enter { from{opacity:0;transform:translateY(24px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes tc-img-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

/* Body layout */
.tc-body { display:flex; align-items:flex-start; max-width:1100px; margin:0 auto; padding:0 40px 80px; gap:40px; border-top:1px solid #eef0ff; }

/* Sidebar */
.tc-sidebar { flex-shrink:0; width:240px; position:sticky; top:80px; padding:28px 0; max-height:calc(100vh - 100px); overflow-y:auto; }
.tc-sidebar::-webkit-scrollbar { width:4px; }
.tc-sidebar::-webkit-scrollbar-thumb { background:#e5e4e7; border-radius:4px; }
.tc-sidebar-label { font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#9ca3af; margin:0 0 14px 12px; }
.tc-sidebar-nav { display:flex; flex-direction:column; gap:2px; }
.tc-sidebar-link { display:flex; align-items:center; justify-content:space-between; gap:8px; width:100%; background:none; border:none; border-left:3px solid transparent; padding:8px 10px 8px 12px; border-radius:0 8px 8px 0; font-size:13px; font-weight:500; color:#6b7280; cursor:pointer; text-align:left; transition:all 0.18s ease; line-height:1.4; font-family:inherit; }
.tc-sidebar-link:hover { background:rgba(99,102,241,0.05); color:#6366f1; border-left-color:rgba(99,102,241,0.3); }
.tc-sidebar-link.active { background:rgba(99,102,241,0.08); color:#6366f1; border-left-color:#6366f1; font-weight:600; }
.tc-sidebar-text { flex:1; }
.tc-sidebar-num { font-size:11px; font-weight:700; color:#a5b4fc; letter-spacing:0.5px; flex-shrink:0; }

/* Content */
.tc-content { flex:1; min-width:0; padding:28px 0; }

/* Section */
.tc-sec { padding:32px 0; border-bottom:1px solid #f0f0ff; }
.tc-sec:last-child { border-bottom:none; }
.tc-sec-head { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
.tc-num-badge { display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; width:36px; height:36px; background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; border-radius:10px; font-size:12px; font-weight:800; letter-spacing:0.5px; }
.tc-sec-head h2 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0; letter-spacing:-0.2px; }
.tc-sec > p { font-size:14px; line-height:1.75; color:#6b7280; margin:0 0 12px; }
.tc-sec > p:last-child { margin-bottom:0; }

/* Note */
.tc-note { background:rgba(99,102,241,0.04); border-left:3px solid #6366f1; border-radius:0 8px 8px 0; padding:12px 16px; font-size:13px; line-height:1.65; color:#6b7280; margin-top:14px; }

/* Lists */
.tc-list { list-style:none; padding:0; margin:10px 0 0; display:flex; flex-direction:column; gap:7px; }
.tc-list li { font-size:14px; line-height:1.6; color:#6b7280; padding-left:20px; position:relative; }
.tc-list li::before { content:''; position:absolute; left:0; top:9px; width:6px; height:6px; border-radius:50%; background:#6366f1; opacity:0.6; }

/* Two columns */
.tc-two-col { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:12px; }
.tc-col-card { background:#f8f8ff; border:1px solid #e8e8ff; border-radius:12px; padding:16px 18px; }
.tc-col-card h4 { font-size:13px; font-weight:700; color:#1a1a2e; margin:0 0 10px; display:flex; align-items:center; gap:7px; }
.tc-col-card h4 .tc-col-dot { width:7px; height:7px; border-radius:50%; background:#6366f1; flex-shrink:0; }
.tc-col-card ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; }
.tc-col-card ul li { font-size:13px; line-height:1.5; color:#6b7280; padding-left:16px; position:relative; }
.tc-col-card ul li::before { content:''; position:absolute; left:0; top:7px; width:5px; height:5px; border-radius:50%; background:#6366f1; opacity:0.45; }

/* CTA */
.tc-cta { background:linear-gradient(135deg,#eef0ff 0%,#f3eeff 100%); border-top:1px solid #dde0ff; padding:64px 40px; text-align:center; }
.tc-cta-inner { max-width:600px; margin:0 auto; }
.tc-cta-eyebrow { display:inline-block; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#6366f1; margin-bottom:12px; }
.tc-cta-title { font-size:32px; font-weight:800; color:#1a1a2e; letter-spacing:-0.8px; margin:0 0 12px; line-height:1.2; }
.tc-cta-sub { font-size:14px; color:#6b7280; line-height:1.7; margin:0 0 32px; }
.tc-cta-contacts { display:flex; justify-content:center; gap:32px; margin-bottom:32px; flex-wrap:wrap; }
.tc-cta-contact-item { display:flex; align-items:center; gap:12px; text-align:left; }
.tc-cta-contact-icon { width:44px; height:44px; background:#fff; border:1px solid #dde0ff; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#6366f1; box-shadow:0 2px 8px rgba(99,102,241,0.08); }
.tc-cta-contact-icon svg { width:20px; height:20px; }
.tc-cta-contact-label { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:0.8px; color:#9ca3af; margin:0 0 3px; }
.tc-cta-contact-val { font-size:13px; font-weight:600; color:#1a1a2e; text-decoration:none; transition:color 0.15s; }
.tc-cta-contact-val:hover { color:#6366f1; }
.tc-cta-btn { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; border:none; border-radius:10px; padding:12px 28px; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.22s ease; box-shadow:0 4px 16px rgba(99,102,241,0.3); font-family:inherit; }
.tc-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(99,102,241,0.4); }

/* Page footer */
.tc-page-footer { background:#1a1a2e; padding:24px 40px; }
.tc-page-footer-inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; }
.tc-pf-logo { font-size:18px; font-weight:800; color:#fff; letter-spacing:-0.4px; }
.tc-pf-logo span { color:#a5b4fc; }
.tc-pf-copy { font-size:13px; color:#6b7280; margin:0; }
.tc-pf-legal { display:flex; align-items:center; gap:20px; font-size:13px; color:#6b7280; }
.tc-pf-link { background:none; border:none; padding:0; font-size:13px; font-family:inherit; color:#6b7280; cursor:pointer; transition:color 0.15s; }
.tc-pf-link:hover, .tc-pf-link.active { color:#a5b4fc; }

/* Responsive */
@media (max-width:1024px) {
  .tc-hero { padding:110px 24px 32px; }
  .tc-body { padding:0 24px 60px; }
  .tc-cta  { padding:48px 24px; }
  .tc-page-footer { padding:20px 24px; }
  .tc-two-col { grid-template-columns:1fr; }
}
@media (max-width:768px) {
  .tc-hero { flex-direction:column; padding:100px 20px 32px; gap:32px; }
  .tc-hero-title { font-size:36px; }
  .tc-hero-right { display:none; }
  .tc-body { flex-direction:column; padding:0 20px 48px; gap:0; }
  .tc-sidebar { position:static; width:100%; max-height:none; padding:20px 0 0; border-bottom:1px solid #f0f0ff; margin-bottom:8px; }
  .tc-sidebar-nav { display:grid; grid-template-columns:1fr 1fr; gap:4px; }
  .tc-sidebar-link { border-left:none; border-radius:8px; }
  .tc-sidebar-link.active { background:rgba(99,102,241,0.1); }
  .tc-cta-contacts { flex-direction:column; align-items:center; }
  .tc-page-footer-inner { flex-direction:column; text-align:center; gap:10px; }
}
`;

const TermsAndConditions = ({ onBack, onPrivacy }) => {
  const [activeId, setActiveId] = useState('about');
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const options = { rootMargin: '-80px 0px -60% 0px', threshold: 0 };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, options);
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{css}</style>
      <div className="tc-page">
        {/* Fixed Navbar */}
        <Navbar onBackToLanding={onBack} fixed />

        {/* ── Hero ── */}
        <div className="tc-hero">
          <div className="tc-hero-left">
            <h1 className="tc-hero-title">Terms &amp; Conditions</h1>
            <p className="tc-hero-date">Effective Date: September 5, 2026</p>
            <p className="tc-hero-intro">
              Welcome to ClientSolution.ai. These Terms and Conditions ("Terms") govern your access to
              and use of our website, software products, applications, and services. By accessing our
              website or using any of our services, you agree to comply with these Terms.
            </p>
            <div className="tc-hero-warning">
              <svg className="tc-hero-warning-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" clipRule="evenodd" />
              </svg>
              <p>If you do not agree with any part of these Terms, please do not use our website or services.</p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="tc-hero-right" aria-hidden="true">
            <img
              src={termsImage}
              alt="Terms and Conditions illustration"
              className="tc-hero-img"
            />
          </div>
        </div>

        {/* ── Body: sidebar + content ── */}
        <div className="tc-body">

          {/* Left Sidebar */}
          <aside className="tc-sidebar">
            <p className="tc-sidebar-label">On This Page</p>
            <nav className="tc-sidebar-nav">
              {sections.map(({ id, num, label }) => (
                <button
                  key={id}
                  className={`tc-sidebar-link${activeId === id ? ' active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  <span className="tc-sidebar-text">{label}</span>
                  <span className="tc-sidebar-num">{num}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="tc-content">

            <section id="about" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">01</span><h2>About Us</h2></div>
              <p>ClientSolution.ai is a software development company providing:</p>
              <ul className="tc-list">
                <li>Customer Relationship Management (CRM) Software</li>
                <li>Billing and Invoicing Solutions</li>
                <li>School Management Systems</li>
                <li>Custom Business Software Development</li>
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Business Process Automation Solutions</li>
                <li>Software Maintenance and Technical Support</li>
              </ul>
            </section>

            <section id="acceptance" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">02</span><h2>Acceptance of Terms</h2></div>
              <p>By accessing our website or engaging our services, you confirm that:</p>
              <ul className="tc-list">
                <li>You are legally capable of entering into a binding agreement.</li>
                <li>You will use our services only for lawful purposes.</li>
                <li>You will comply with all applicable laws and regulations.</li>
              </ul>
            </section>

            <section id="services" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">03</span><h2>Services</h2></div>
              <p>ClientSolution.ai provides software development, consulting, implementation, customization, maintenance, and support services.</p>
              <p>We reserve the right to:</p>
              <ul className="tc-list">
                <li>Modify or discontinue any service at any time.</li>
                <li>Update service features and functionality.</li>
                <li>Refuse service where required by law or company policy.</li>
              </ul>
            </section>

            <section id="user-resp" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">04</span><h2>User Responsibilities</h2></div>
              <div className="tc-two-col">
                <div className="tc-col-card">
                  <h4><span className="tc-col-dot" />You agree to</h4>
                  <ul>
                    <li>Provide accurate information when contacting us.</li>
                    <li>Maintain the confidentiality of any login credentials provided to you.</li>
                    <li>Use our software and services responsibly.</li>
                    <li>Not engage in activities that may damage, disrupt, or interfere with our systems.</li>
                  </ul>
                </div>
                <div className="tc-col-card">
                  <h4><span className="tc-col-dot" />You shall not</h4>
                  <ul>
                    <li>Attempt unauthorized access to our systems.</li>
                    <li>Copy, reverse engineer, or modify software without written permission.</li>
                    <li>Upload malicious code, viruses, or harmful content.</li>
                    <li>Use our services for unlawful activities.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="ip" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">05</span><h2>Intellectual Property</h2></div>
              <p>All content, designs, software, source code, logos, trademarks, graphics, and materials available on ClientSolution.ai are the property of ClientSolution.ai or its licensors unless otherwise agreed in writing.</p>
              <div className="tc-note">No content may be copied, reproduced, distributed, or used without prior written permission.</div>
              <p style={{marginTop:'14px'}}>For custom software projects, ownership rights shall be governed by the specific agreement signed between ClientSolution.ai and the client.</p>
            </section>

            <section id="projects" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">06</span><h2>Client Projects and Custom Development</h2></div>
              <p>For custom software development projects:</p>
              <ul className="tc-list">
                <li>Project scope, pricing, timelines, and deliverables will be defined in a separate agreement or proposal.</li>
                <li>Additional requirements outside the approved scope may result in additional charges.</li>
                <li>Delays caused by client-side approvals, content, data, or requirements may affect delivery timelines.</li>
                <li>Final project ownership and licensing rights shall be determined by the applicable project agreement.</li>
              </ul>
            </section>

            <section id="payments" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">07</span><h2>Payments</h2></div>
              <p>Clients agree to pay all applicable fees as specified in quotations, proposals, invoices, or service agreements.</p>
              <ul className="tc-list">
                <li>Payments are non-refundable after work has commenced.</li>
                <li>Delayed payments may result in suspension of services.</li>
                <li>ClientSolution.ai reserves the right to charge applicable late payment fees where legally permitted.</li>
              </ul>
            </section>

            <section id="software" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">08</span><h2>Software Usage</h2></div>
              <p>Clients using CRM, Billing Software, School Management Systems, or other applications developed by ClientSolution.ai agree to:</p>
              <ul className="tc-list">
                <li>Use the software only for legitimate business purposes.</li>
                <li>Maintain the security of their accounts.</li>
                <li>Ensure that data entered into the system complies with applicable laws.</li>
                <li>Not attempt to copy, resell, or redistribute the software without authorization.</li>
              </ul>
            </section>

            <section id="school" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">09</span><h2>School Management Systems</h2></div>
              <p>Educational institutions using our School Management Systems are responsible for:</p>
              <ul className="tc-list">
                <li>Obtaining necessary permissions for collecting student information.</li>
                <li>Ensuring compliance with applicable educational and privacy regulations.</li>
                <li>Managing user access and credentials within the institution.</li>
              </ul>
              <div className="tc-note">ClientSolution.ai acts only as a software provider and is not responsible for how institutions collect or use student data.</div>
            </section>

            <section id="privacy" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">10</span><h2>Privacy</h2></div>
              <p>Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and processing of information as described in our Privacy Policy.</p>
              {onPrivacy && (
                <div className="tc-note" style={{cursor:'pointer'}} onClick={onPrivacy}>
                  📄 View our <strong style={{color:'#6366f1'}}>Privacy Policy →</strong>
                </div>
              )}
            </section>

            <section id="third-party" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">11</span><h2>Third-Party Services</h2></div>
              <p>Our services may integrate with third-party platforms such as:</p>
              <ul className="tc-list">
                <li>Cloud Hosting Providers</li><li>Payment Gateways</li>
                <li>Email Services</li><li>Analytics Platforms</li>
                <li>Communication Tools</li>
              </ul>
              <div className="tc-note">We are not responsible for the availability, content, security, or practices of third-party services.</div>
            </section>

            <section id="disclaimer" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">12</span><h2>Disclaimer of Warranties</h2></div>
              <p>Services and software are provided on an "as is" and "as available" basis. To the maximum extent permitted by law, ClientSolution.ai does not guarantee:</p>
              <ul className="tc-list">
                <li>Uninterrupted operation</li>
                <li>Error-free functionality</li>
                <li>Complete compatibility with all devices or systems</li>
                <li>Freedom from all security risks</li>
              </ul>
            </section>

            <section id="liability" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">13</span><h2>Limitation of Liability</h2></div>
              <p>To the fullest extent permitted by law, ClientSolution.ai shall not be liable for:</p>
              <ul className="tc-list">
                <li>Indirect or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or service interruptions</li>
                <li>Unauthorized access caused by user negligence</li>
              </ul>
              <div className="tc-note">Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.</div>
            </section>

            <section id="indemnify" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">14</span><h2>Indemnification</h2></div>
              <p>You agree to defend, indemnify, and hold harmless ClientSolution.ai, its employees, partners, and affiliates from claims, liabilities, damages, and expenses arising from:</p>
              <ul className="tc-list">
                <li>Your misuse of our services</li>
                <li>Violation of these Terms</li>
                <li>Violation of applicable laws or third-party rights</li>
              </ul>
            </section>

            <section id="termination" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">15</span><h2>Termination</h2></div>
              <p>We reserve the right to suspend or terminate access to our services if:</p>
              <ul className="tc-list">
                <li>These Terms are violated.</li>
                <li>Fraudulent or unlawful activity is detected.</li>
                <li>Required payments remain outstanding.</li>
              </ul>
              <div className="tc-note">Termination does not relieve any outstanding payment obligations.</div>
            </section>

            <section id="changes" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">16</span><h2>Changes to These Terms</h2></div>
              <p>We may update these Terms from time to time.</p>
              <div className="tc-note">Updated versions will be posted on this page with a revised Effective Date. Continued use of our website or services after updates constitutes acceptance of the revised Terms.</div>
            </section>

            <section id="law" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">17</span><h2>Governing Law</h2></div>
              <p>These Terms shall be governed and interpreted in accordance with the laws of India, without regard to conflict of law principles.</p>
              <div className="tc-note">Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in India.</div>
            </section>

            <section id="contact" className="tc-sec">
              <div className="tc-sec-head"><span className="tc-num-badge">18</span><h2>Contact Us</h2></div>
              <p>For any questions regarding these Terms and Conditions, please contact:</p>
            </section>

          </main>
        </div>

        {/* ── CTA ── */}
        <div className="tc-cta">
          <div className="tc-cta-inner">
            <span className="tc-cta-eyebrow">HAVE ANY QUESTIONS?</span>
            <h2 className="tc-cta-title">We're Here to Help</h2>
            <p className="tc-cta-sub">If you have any questions about these Terms and Conditions, please don't hesitate to reach out.</p>
            <div className="tc-cta-contacts">
              <div className="tc-cta-contact-item">
                <div className="tc-cta-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="tc-cta-contact-label">Email</p>
                  <a href="mailto:bbsoftwarecompany@gmail.com" className="tc-cta-contact-val">bbsoftwarecompany@gmail.com</a>
                </div>
              </div>
              <div className="tc-cta-contact-item">
                <div className="tc-cta-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="tc-cta-contact-label">Website</p>
                  <a href="https://clientsolution.ai" target="_blank" rel="noreferrer" className="tc-cta-contact-val">https://clientsolution.ai</a>
                </div>
              </div>
            </div>
            <button className="tc-cta-btn" onClick={onBack}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:'16px',height:'16px'}}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Us
            </button>
          </div>
        </div>

        {/* ── Page Footer ── */}
        <footer className="tc-page-footer">
          <div className="tc-page-footer-inner">
            <div className="tc-pf-logo">Client Solution<span>.ai</span></div>
            <p className="tc-pf-copy">© {new Date().getFullYear()} Client Solution.ai. All rights reserved.</p>
            <div className="tc-pf-legal">
              {onPrivacy && (
                <button className="tc-pf-link" onClick={onPrivacy}>Privacy Policy</button>
              )}
              <button className="tc-pf-link active">Terms &amp; Conditions</button>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
};

export default TermsAndConditions;
