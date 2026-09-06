import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import appPreviewImg from '../assets/app_download_preview.jpg';
import './DownloadPage.css';

const platforms = [
  {
    id: 'mac',
    name: 'macOS Desktop',
    subtitle: 'M-Series (Apple Silicon) & Intel',
    tag: 'Beta Testing',
    tagClass: 'beta',
    progress: 85,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.45-.61.71-1.15 1.87-.99 2.99 1.09.08 2.21-.52 2.86-1.34z"/>
      </svg>
    ),
    features: [
      'Native menu bar app & quick search',
      'Offline CRM & invoice cache',
      'System dark/light auto-theme'
    ],
    targetDate: 'Q4 2026'
  },
  {
    id: 'windows',
    name: 'Windows App',
    subtitle: 'Windows 11 / 10 (64-bit)',
    tag: 'In Development',
    tagClass: 'dev',
    progress: 75,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1"/>
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1"/>
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1"/>
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1"/>
      </svg>
    ),
    features: [
      'System tray quick launcher',
      'Direct receipt & invoice PDF printing',
      'Multi-monitor dashboard view'
    ],
    targetDate: 'Q4 2026'
  },
  {
    id: 'ios',
    name: 'iOS & iPadOS',
    subtitle: 'iPhone & iPad (iOS 16+)',
    tag: 'TestFlight QA',
    tagClass: 'qa',
    progress: 90,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
      </svg>
    ),
    features: [
      'FaceID & TouchID secure login',
      'Real-time push payment alerts',
      'Document camera scanner'
    ],
    targetDate: 'Q3 2026'
  },
  {
    id: 'android',
    name: 'Android App',
    subtitle: 'Phones & Tablets (Android 10+)',
    tag: 'In Development',
    tagClass: 'dev',
    progress: 70,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#3DDC84">
        <path d="M6 18c0 .55.45 1 1 1h1v3c0 .55.45 1 1 1s1-.45 1-1v-3h4v3c0 .55.45 1 1 1s1-.45 1-1v-3h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-4.19l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.72 2.87 12.89 2.67 12 2.67c-.89 0-1.72.2-2.64.61L7.88 1.8c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.73 5.08 5.67 7.03 5.67 9.25h12.66c0-2.22-1.06-4.17-2.8-5.44zM9 6.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
      </svg>
    ),
    features: [
      'Biometric fingerprint auth',
      'Home screen widget support',
      'Instant offline lead entry'
    ],
    targetDate: 'Q4 2026'
  }
];

const DownloadPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activePlatformModal, setActivePlatformModal] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim().length > 3) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="download-page">
      {/* Background ambient lighting */}
      <div className="dl-bg-glow-top"></div>
      <div className="dl-bg-dots"></div>

      {/* Navigation Header */}
      <Navbar fixed={true} onBackToLanding={() => navigate('/')} />

      {/* Main Content Body */}
      <div className="dl-container">
        
        {/* Hero Section */}
        <div className="dl-hero-section">
          <h1 className="dl-hero-title">
            Download Feature <br />
            <span className="dl-gradient-text">Will Be Available Soon</span>
          </h1>

          <p className="dl-hero-subtitle">
            We are engineering high-performance, native desktop and mobile applications for macOS, Windows, iOS, and Android. Get ready for blazing fast offline workflows, instant push sync, and system-level integrations.
          </p>
        </div>

        {/* Notice Banner Card */}
        <div className="dl-notice-banner">
          <div className="dl-notice-grid">
            <div className="dl-notice-left">
              <h2>⚡ Get Early Access &amp; Launch Notifications</h2>
              <p>
                Be among the first business leaders to test our native desktop &amp; mobile apps. Enter your email to join the early access VIP list and receive an instant download link when v1.0 drops.
              </p>

              {isSubscribed ? (
                <div className="dl-success-toast">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>🎉 You're on the early access list! We'll notify you as soon as downloads go live.</span>
                </div>
              ) : (
                <form className="dl-early-access-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="dl-notify-btn">
                    Notify Me First
                  </button>
                </form>
              )}
            </div>

            <div className="dl-notice-right">
              <img
                src={appPreviewImg}
                alt="Client Solution App Preview"
                className="dl-preview-image"
              />
            </div>
          </div>
        </div>

        {/* Platform Availability Grid */}
        <div className="dl-section-heading">
          <h2>Platforms &amp; Release Roadmap</h2>
          <p>Real-time progress updates for our desktop and mobile releases.</p>
        </div>

        <div className="dl-platform-grid">
          {platforms.map((item) => (
            <div key={item.id} className="dl-platform-card">
              <div>
                <div className="dl-card-top-header">
                  <div className="dl-os-icon-wrapper">{item.icon}</div>
                  <span className={`dl-badge-tag ${item.tagClass}`}>{item.tag}</span>
                </div>

                <div className="dl-card-body">
                  <h3>{item.name}</h3>
                  <div className="dl-subtitle">{item.subtitle}</div>
                </div>

                <div className="dl-progress-box">
                  <div className="dl-progress-labels">
                    <span>Build Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="dl-progress-track">
                    <div className="dl-progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>

                <ul className="dl-feature-list">
                  {item.features.map((feat, idx) => (
                    <li key={idx}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="dl-action-btn-disabled"
                onClick={() => {
                  if (!isSubscribed) {
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }
                  setActivePlatformModal(item.name);
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span>Notify for {item.name} ({item.targetDate})</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default DownloadPage;
