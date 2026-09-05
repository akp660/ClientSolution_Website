import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ConsultationModal from '../components/ConsultationModal';
import privacyImage from '../assets/privacy_image.png';

const sections = [
  { id: 'introduction',   num: '01', label: 'Introduction' },
  { id: 'about',          num: '02', label: 'About Us' },
  { id: 'info-collect',   num: '03', label: 'Information We Collect' },
  { id: 'how-use',        num: '04', label: 'How We Use Information' },
  { id: 'cookies',        num: '05', label: 'Cookies and Analytics' },
  { id: 'data-sharing',   num: '06', label: 'Data Sharing and Disclosure' },
  { id: 'data-security',  num: '07', label: 'Data Security' },
  { id: 'data-retention', num: '08', label: 'Data Retention' },
  { id: 'school-mgmt',    num: '09', label: 'School Management Systems' },
  { id: 'third-party',    num: '10', label: 'Third Party Services' },
  { id: 'your-rights',    num: '11', label: 'Your Privacy Rights' },
  { id: 'childrens',      num: '12', label: "Children's Privacy" },
  { id: 'international',  num: '13', label: 'International Data Transfers' },
  { id: 'changes',        num: '14', label: 'Changes to This Policy' },
  { id: 'contact',        num: '15', label: 'Contact Us' },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.pp-page { width:100%; min-height:100vh; background:#fff; font-family:'Inter',system-ui,sans-serif; text-align:left; color:#3d3d4e; }

/* Hero */
.pp-hero { display:flex; align-items:center; justify-content:space-between; gap:40px; max-width:1100px; margin:0 auto; padding:100px 40px 32px; }
.pp-hero-left { flex:1; max-width:620px; }
.pp-hero-title { font-size:52px; font-weight:800; color:#1a1a2e; letter-spacing:-1.5px; line-height:1.08; margin:0 0 12px; }
.pp-hero-date  { font-size:13px; color:#9ca3af; margin:0 0 20px; font-weight:500; }
.pp-hero-intro { font-size:14px; line-height:1.75; color:#6b7280; margin:0 0 20px; }
.pp-hero-consent { display:flex; align-items:flex-start; gap:10px; background:rgba(124,58,237,0.06); border:1px solid rgba(124,58,237,0.18); border-radius:10px; padding:14px 16px; }
.pp-hero-consent-icon { width:18px; height:18px; flex-shrink:0; color:#7c3aed; margin-top:1px; }
.pp-hero-consent p { font-size:13px; line-height:1.6; color:#7c3aed; font-weight:500; margin:0; }

/* Hero image */
.pp-hero-right { flex-shrink:0; display:flex; align-items:center; justify-content:center; }
.pp-hero-img {
  width:460px; max-width:100%; height:auto;
  mix-blend-mode:multiply;
  -webkit-mask-image:radial-gradient(ellipse 85% 85% at 50% 45%, black 55%, transparent 100%);
  mask-image:radial-gradient(ellipse 85% 85% at 50% 45%, black 55%, transparent 100%);
  animation: pp-img-enter 0.8s cubic-bezier(0.22,1,0.36,1) both, pp-img-float 5s ease-in-out 0.8s infinite;
  will-change:transform;
}
.pp-hero-img:hover { animation-play-state:paused; transform:translateY(-6px) scale(1.02); transition:transform 0.4s ease; }
@keyframes pp-img-enter { from{opacity:0;transform:translateY(24px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes pp-img-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

/* Body layout */
.pp-body { display:flex; align-items:flex-start; max-width:1100px; margin:0 auto; padding:0 40px 80px; gap:40px; border-top:1px solid #f0eeff; }

/* Sidebar */
.pp-sidebar { flex-shrink:0; width:240px; position:sticky; top:80px; padding:28px 0; max-height:calc(100vh - 100px); overflow-y:auto; }
.pp-sidebar::-webkit-scrollbar { width:4px; }
.pp-sidebar::-webkit-scrollbar-thumb { background:#e5e4e7; border-radius:4px; }
.pp-sidebar-label { font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#9ca3af; margin:0 0 14px 12px; }
.pp-sidebar-nav { display:flex; flex-direction:column; gap:2px; }
.pp-sidebar-link { display:flex; align-items:center; justify-content:space-between; gap:8px; width:100%; background:none; border:none; border-left:3px solid transparent; padding:8px 10px 8px 12px; border-radius:0 8px 8px 0; font-size:13px; font-weight:500; color:#6b7280; cursor:pointer; text-align:left; transition:all 0.18s ease; line-height:1.4; }
.pp-sidebar-link:hover { background:rgba(124,58,237,0.05); color:#7c3aed; border-left-color:rgba(124,58,237,0.3); }
.pp-sidebar-link.active { background:rgba(124,58,237,0.08); color:#7c3aed; border-left-color:#7c3aed; font-weight:600; }
.pp-sidebar-text { flex:1; }
.pp-sidebar-num { font-size:11px; font-weight:700; color:#c4b5fd; letter-spacing:0.5px; flex-shrink:0; }

/* Content */
.pp-content { flex:1; min-width:0; padding:28px 0; }

/* Section */
.pp-sec { padding:32px 0; border-bottom:1px solid #f3f0ff; }
.pp-sec:last-child { border-bottom:none; }
.pp-sec-head { display:flex; align-items:center; gap:14px; margin-bottom:16px; }
.pp-num-badge { display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; width:36px; height:36px; background:linear-gradient(135deg,#7c3aed,#6366f1); color:#fff; border-radius:10px; font-size:12px; font-weight:800; letter-spacing:0.5px; }
.pp-sec-head h2 { font-size:18px; font-weight:700; color:#1a1a2e; margin:0; letter-spacing:-0.2px; }
.pp-sec > p { font-size:14px; line-height:1.75; color:#6b7280; margin:0 0 12px; }
.pp-sec > p:last-child { margin-bottom:0; }

/* Highlight box */
.pp-highlight-box { display:flex; align-items:flex-start; gap:10px; background:rgba(124,58,237,0.06); border:1px solid rgba(124,58,237,0.15); border-radius:10px; padding:14px 16px; margin-top:14px; }
.pp-highlight-box svg { width:18px; height:18px; flex-shrink:0; color:#7c3aed; margin-top:1px; }
.pp-highlight-box p { font-size:13px; line-height:1.6; color:#7c3aed; font-weight:500; margin:0; }

/* Note */
.pp-note { background:rgba(124,58,237,0.04); border-left:3px solid #7c3aed; border-radius:0 8px 8px 0; padding:12px 16px; font-size:13px; line-height:1.65; color:#6b7280; margin-top:14px; }

/* Lists */
.pp-list { list-style:none; padding:0; margin:10px 0 0; display:flex; flex-direction:column; gap:7px; }
.pp-list li { font-size:14px; line-height:1.6; color:#6b7280; padding-left:20px; position:relative; }
.pp-list li::before { content:''; position:absolute; left:0; top:9px; width:6px; height:6px; border-radius:50%; background:#7c3aed; opacity:0.6; }
.pp-two-col-list { display:grid; grid-template-columns:1fr 1fr; gap:0 24px; margin-top:4px; }

/* Info cards */
.pp-cards-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:16px; }
.pp-info-card { background:#faf8ff; border:1px solid #ede9ff; border-radius:14px; padding:20px; transition:box-shadow 0.2s,transform 0.2s; }
.pp-info-card:hover { box-shadow:0 6px 24px rgba(124,58,237,0.1); transform:translateY(-2px); }
.pp-info-card-icon { width:38px; height:38px; background:rgba(124,58,237,0.1); border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:14px; color:#7c3aed; }
.pp-info-card-icon svg { width:20px; height:20px; }
.pp-info-card h3 { font-size:13px; font-weight:700; color:#1a1a2e; margin:0 0 12px; }
.pp-card-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:6px; }
.pp-card-list li { font-size:12px; line-height:1.5; color:#6b7280; padding-left:16px; position:relative; }
.pp-card-list li::before { content:''; position:absolute; left:0; top:7px; width:5px; height:5px; border-radius:50%; background:#7c3aed; opacity:0.5; }
.pp-card-text { font-size:12px; line-height:1.65; color:#6b7280; margin:0; }

/* CTA */
.pp-cta { background:linear-gradient(135deg,#f3eeff 0%,#f0f4ff 100%); border-top:1px solid #e8e0ff; padding:64px 40px; text-align:center; }
.pp-cta-inner { max-width:600px; margin:0 auto; }
.pp-cta-eyebrow { display:inline-block; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#7c3aed; margin-bottom:12px; }
.pp-cta-title { font-size:32px; font-weight:800; color:#1a1a2e; letter-spacing:-0.8px; margin:0 0 12px; line-height:1.2; }
.pp-cta-sub { font-size:14px; color:#6b7280; line-height:1.7; margin:0 0 32px; }
.pp-cta-contacts { display:flex; justify-content:center; gap:32px; margin-bottom:32px; flex-wrap:wrap; }
.pp-cta-contact-item { display:flex; align-items:center; gap:12px; text-align:left; }
.pp-cta-contact-icon { width:44px; height:44px; background:#fff; border:1px solid #e8e0ff; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:#7c3aed; box-shadow:0 2px 8px rgba(124,58,237,0.08); }
.pp-cta-contact-icon svg { width:20px; height:20px; }
.pp-cta-contact-label { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:0.8px; color:#9ca3af; margin:0 0 3px; }
.pp-cta-contact-val { font-size:13px; font-weight:600; color:#1a1a2e; text-decoration:none; transition:color 0.15s; }
.pp-cta-contact-val:hover { color:#7c3aed; }
.pp-cta-btn { display:inline-flex; align-items:center; gap:8px; background:linear-gradient(135deg,#7c3aed,#6366f1); color:#fff; border:none; border-radius:10px; padding:12px 28px; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.22s ease; box-shadow:0 4px 16px rgba(124,58,237,0.3); font-family:inherit; }
.pp-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(124,58,237,0.4); }

/* Page footer */
.pp-page-footer { background:#1a1a2e; padding:24px 40px; }
.pp-page-footer-inner { max-width:1100px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:16px; flex-wrap:wrap; }
.pp-pf-logo { font-size:18px; font-weight:800; color:#fff; letter-spacing:-0.4px; }
.pp-pf-logo span { color:#a78bfa; }
.pp-pf-copy { font-size:13px; color:#6b7280; margin:0; }
.pp-pf-legal { display:flex; align-items:center; gap:20px; font-size:13px; color:#6b7280; }
.pp-pf-link { background:none; border:none; padding:0; font-size:13px; font-family:inherit; color:#6b7280; cursor:pointer; transition:color 0.15s; }
.pp-pf-link:hover, .pp-pf-link.active { color:#a78bfa; }

/* Responsive */
@media (max-width:1024px) {
  .pp-hero { padding:110px 24px 32px; }
  .pp-body { padding:0 24px 60px; }
  .pp-cta  { padding:48px 24px; }
  .pp-page-footer { padding:20px 24px; }
  .pp-cards-row { grid-template-columns:1fr 1fr; }
}
@media (max-width:768px) {
  .pp-hero { flex-direction:column; padding:100px 20px 32px; gap:32px; }
  .pp-hero-title { font-size:36px; }
  .pp-hero-right { display:none; }
  .pp-body { flex-direction:column; padding:0 20px 48px; gap:0; }
  .pp-sidebar { position:static; width:100%; max-height:none; padding:20px 0 0; border-bottom:1px solid #f3f0ff; margin-bottom:8px; }
  .pp-sidebar-nav { display:grid; grid-template-columns:1fr 1fr; gap:4px; }
  .pp-sidebar-link { border-left:none; border-radius:8px; }
  .pp-sidebar-link.active { background:rgba(124,58,237,0.1); }
  .pp-cards-row { grid-template-columns:1fr; }
  .pp-two-col-list { grid-template-columns:1fr; }
  .pp-cta-contacts { flex-direction:column; align-items:center; }
  .pp-page-footer-inner { flex-direction:column; text-align:center; gap:10px; }
}
`;

const PrivacyPolicy = ({ onBack }) => {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState('introduction');
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="pp-page">
        {/* Fixed Navbar */}
        <Navbar onBackToLanding={onBack} fixed />

        {/* ── Hero ── */}
        <div className="pp-hero">
          <div className="pp-hero-left">
            <h1 className="pp-hero-title">Privacy Policy</h1>
            <p className="pp-hero-date">Effective Date: September 5, 2026</p>
            <p className="pp-hero-intro">
              At ClientSolution.ai, we take your privacy seriously, and so we are committed to
              protecting your personal information. This Privacy Policy explains how we collect, use,
              disclose, and protect information when you visit our website, contact us, or use any of
              our software products and services.
            </p>
            <div className="pp-hero-consent">
              <svg className="pp-hero-consent-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              <p>
                By accessing our website or using our services, you agree to the practices described
                in this Privacy Policy.
              </p>
            </div>
          </div>
          <div className="pp-hero-right" aria-hidden="true">
            <img
              src={privacyImage}
              alt="Privacy Policy – Your Privacy Our Priority illustration"
              className="pp-hero-img"
            />
          </div>
        </div>

        {/* ── Body: sidebar + content ── */}
        <div className="pp-body">

          {/* Left Sidebar */}
          <aside className="pp-sidebar">
            <p className="pp-sidebar-label">On This Page</p>
            <nav className="pp-sidebar-nav">
              {sections.map(({ id, num, label }) => (
                <button
                  key={id}
                  className={`pp-sidebar-link${activeId === id ? ' active' : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  <span className="pp-sidebar-text">{label}</span>
                  <span className="pp-sidebar-num">{num}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="pp-content">

            <section id="introduction" className="pp-sec">
              <div className="pp-sec-head">
                <span className="pp-num-badge">01</span>
                <h2>Introduction</h2>
              </div>
              <p>
                ClientSolution.ai ("Company", "we", "our", or "us") is committed to protecting the
                privacy and security of our clients, website visitors, and users. This Privacy Policy
                explains how we collect, use, disclose, and protect information when you visit our
                website, contact us, or use any of our software products and services.
              </p>
              <div className="pp-highlight-box">
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <p>By accessing our website or using our services, you agree to the practices described in this Privacy Policy.</p>
              </div>
            </section>

            <section id="about" className="pp-sec">
              <div className="pp-sec-head">
                <span className="pp-num-badge">02</span>
                <h2>About ClientSolution.ai</h2>
              </div>
              <p>ClientSolution.ai is a software development company providing technology solutions including:</p>
              <ul className="pp-list">
                <li>Customer Relationship Management (CRM) Software</li>
                <li>Billing and Invoicing Solutions</li>
                <li>School Management Systems</li>
                <li>Custom Business Software Development</li>
                <li>Web Application Development</li>
                <li>Mobile Application Development</li>
                <li>Business Process Automation Solutions</li>
                <li>Software Maintenance and Support Services</li>
              </ul>
            </section>

            <section id="info-collect" className="pp-sec">
              <div className="pp-sec-head">
                <span className="pp-num-badge">03</span>
                <h2>Information We Collect</h2>
              </div>
              <div className="pp-cards-row">
                <div className="pp-info-card">
                  <div className="pp-info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h3>Personal Information</h3>
                  <ul className="pp-card-list">
                    <li>Full Name</li><li>Email Address</li><li>Phone Number</li>
                    <li>Company or Organization Name</li><li>Business Address</li>
                    <li>Information submitted through contact forms, emails, or support requests</li>
                  </ul>
                </div>
                <div className="pp-info-card">
                  <div className="pp-info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                    </svg>
                  </div>
                  <h3>Technical Information</h3>
                  <ul className="pp-card-list">
                    <li>IP Address</li><li>Browser Type and Version</li><li>Device Information</li>
                    <li>Operating System</li><li>Website Usage Data</li>
                    <li>Referral URLs</li><li>Cookies and Similar Technologies</li>
                  </ul>
                </div>
                <div className="pp-info-card">
                  <div className="pp-info-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                    </svg>
                  </div>
                  <h3>Client Data</h3>
                  <p className="pp-card-text">
                    While providing CRM, billing, school management, or custom software solutions, we may process
                    data on behalf of our clients. Such information remains the property of the respective client,
                    and we process it only as required to provide agreed services.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-use" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">04</span><h2>How We Use Information</h2></div>
              <p>We use collected information for the following purposes:</p>
              <div className="pp-two-col-list">
                <ul className="pp-list">
                  <li>Responding to inquiries and support requests</li>
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Developing and customizing software solutions</li>
                  <li>Managing customer relationships</li>
                </ul>
                <ul className="pp-list">
                  <li>Monitoring system performance and security</li>
                  <li>Communicating project updates and service notifications</li>
                  <li>Preventing fraud, unauthorized access, or misuse</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </section>

            <section id="cookies" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">05</span><h2>Cookies and Analytics</h2></div>
              <p>Our website may use cookies and analytics technologies to:</p>
              <ul className="pp-list">
                <li>Improve website functionality</li><li>Understand visitor behavior</li>
                <li>Enhance user experience</li><li>Measure website performance</li>
              </ul>
              <div className="pp-note">You may disable cookies through your browser settings; however, certain website features may not function properly.</div>
            </section>

            <section id="data-sharing" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">06</span><h2>Data Sharing and Disclosure</h2></div>
              <p>We do not sell, rent, or trade personal information to third parties.</p>
              <p>We may share information only when necessary with:</p>
              <ul className="pp-list">
                <li>Employees and authorized team members</li>
                <li>Trusted service providers and hosting partners</li>
                <li>Payment processing providers</li>
                <li>Legal or regulatory authorities when required by law</li>
                <li>Third parties involved in delivering requested services</li>
              </ul>
              <div className="pp-note">All such parties are expected to maintain appropriate confidentiality and security measures.</div>
            </section>

            <section id="data-security" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">07</span><h2>Data Security</h2></div>
              <p>We implement reasonable administrative, technical, and organizational safeguards to protect information against unauthorized access, disclosure, alteration, or destruction.</p>
              <div className="pp-note">While we strive to use commercially acceptable means to protect information, no internet transmission or electronic storage method can be guaranteed to be 100% secure.</div>
            </section>

            <section id="data-retention" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">08</span><h2>Data Retention</h2></div>
              <p>We retain personal information only for as long as necessary to:</p>
              <ul className="pp-list">
                <li>Provide services and support</li><li>Fulfill contractual obligations</li>
                <li>Resolve disputes</li><li>Enforce agreements</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
              <div className="pp-note">When information is no longer required, it will be securely deleted or anonymized where reasonably possible.</div>
            </section>

            <section id="school-mgmt" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">09</span><h2>School Management Systems</h2></div>
              <p>ClientSolution.ai develops School Management Systems for educational institutions.</p>
              <p>Any student, parent, teacher, or staff information processed through such systems belongs to the respective educational institution. The institution is responsible for obtaining necessary permissions and complying with applicable privacy laws.</p>
              <div className="pp-note">ClientSolution.ai processes such information solely for providing and maintaining the software services requested by the institution.</div>
            </section>

            <section id="third-party" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">10</span><h2>Third-Party Services</h2></div>
              <p>Our products and website may integrate with third-party services, including but not limited to:</p>
              <ul className="pp-list">
                <li>Cloud Hosting Providers</li><li>Email Service Providers</li>
                <li>Payment Gateways</li><li>Analytics Platforms</li>
                <li>Communication and Support Tools</li>
              </ul>
              <div className="pp-note">These third-party services operate under their own privacy policies, and we encourage users to review them.</div>
            </section>

            <section id="your-rights" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">11</span><h2>Your Privacy Rights</h2></div>
              <p>Depending on applicable laws and regulations, you may have the right to:</p>
              <ul className="pp-list">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of personal information</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <div className="pp-note">Requests may be submitted using the contact details provided below.</div>
            </section>

            <section id="childrens" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">12</span><h2>Children's Privacy</h2></div>
              <p>Our services are not directed toward children under the age of 13.</p>
              <div className="pp-note">We do not knowingly collect personal information directly from children. Any student-related information processed through School Management Systems is managed on behalf of educational institutions and remains under their control.</div>
            </section>

            <section id="international" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">13</span><h2>International Data Transfers</h2></div>
              <p>If information is transferred, stored, or processed outside your jurisdiction, we will take reasonable measures to ensure appropriate protection consistent with applicable laws.</p>
            </section>

            <section id="changes" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">14</span><h2>Changes to This Privacy Policy</h2></div>
              <p>We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or services.</p>
              <div className="pp-note">Any updates will be posted on this page with a revised Effective Date. Continued use of our services after changes are published constitutes acceptance of the updated Privacy Policy.</div>
            </section>

            <section id="contact" className="pp-sec">
              <div className="pp-sec-head"><span className="pp-num-badge">15</span><h2>Contact Us</h2></div>
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
            </section>

          </main>
        </div>

        {/* ── CTA ── */}
        <div className="pp-cta">
          <div className="pp-cta-inner">
            <span className="pp-cta-eyebrow">HAVE ANY QUESTIONS?</span>
            <h2 className="pp-cta-title">We're Here to Help</h2>
            <p className="pp-cta-sub">If you have any questions about this Privacy Policy, please don't hesitate to contact us.</p>
            <div className="pp-cta-contacts">
              <div className="pp-cta-contact-item">
                <div className="pp-cta-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="pp-cta-contact-label">Email</p>
                  <a href="mailto:bbsoftwarecompany@gmail.com" className="pp-cta-contact-val">bbsoftwarecompany@gmail.com</a>
                </div>
              </div>
              <div className="pp-cta-contact-item">
                <div className="pp-cta-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div>
                  <p className="pp-cta-contact-label">Our Office</p>
                  <a href="https://clientsolution.ai" target="_blank" rel="noreferrer" className="pp-cta-contact-val">https://clientsolution.ai</a>
                </div>
              </div>
            </div>
            <button className="pp-cta-btn" onClick={() => setIsModalOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:'16px',height:'16px'}}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Us
            </button>
          </div>
        </div>

        {/* ── Page Footer ── */}
        <footer className="pp-page-footer">
          <div className="pp-page-footer-inner">
            <div className="pp-pf-logo">Client Solution<span>.ai</span></div>
            <p className="pp-pf-copy">© {new Date().getFullYear()} Client Solution.ai. All rights reserved.</p>
            <div className="pp-pf-legal">
              <button className="pp-pf-link active" onClick={onBack}>Privacy Policy</button>
              <button className="pp-pf-link" onClick={() => { navigate('/terms'); window.scrollTo({top:0,behavior:'smooth'}); }}>Terms &amp; Conditions</button>
            </div>
          </div>
        </footer>

        <ConsultationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default PrivacyPolicy;
