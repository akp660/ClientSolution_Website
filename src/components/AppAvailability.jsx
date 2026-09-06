import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppAvailability.css';

const storeCards = [
  {
    id: 'apple',
    name: 'Apple App Store',
    platform: 'iOS & macOS',
    rating: '4.9 ★',
    reviews: '10K+ Ratings',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.45-.61.71-1.15 1.87-.99 2.99 1.09.08 2.21-.52 2.86-1.34z"/>
      </svg>
    ),
    btnIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.45-.61.71-1.15 1.87-.99 2.99 1.09.08 2.21-.52 2.86-1.34z"/>
      </svg>
    ),
    subText: 'Download on the',
    mainText: 'App Store',
    link: '#download-apple'
  },
  {
    id: 'playstore',
    name: 'Google Play Store',
    platform: 'Android & Tablets',
    rating: '4.8 ★',
    reviews: '50K+ Ratings',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M3.6 2.5C3.2 2.9 3 3.5 3 4.3v15.4c0 .8.2 1.4.6 1.8l.1.1 8.6-8.6v-.2L3.6 2.5z" fill="#00E676"/>
        <path d="M15.2 15.8l-2.9-2.9v-.2l2.9-2.9.1.1 3.4 1.9c1 .6 1 1.5 0 2.1l-3.5 1.9z" fill="#FFD600"/>
        <path d="M12.3 12.7L3.6 21.4c.4.4 1 .4 1.7 0l10-5.6-3-3.1z" fill="#FF3D00"/>
        <path d="M12.3 11.3l3-3.1-10-5.6c-.7-.4-1.3-.4-1.7 0l8.7 8.7z" fill="#00B0FF"/>
      </svg>
    ),
    btnIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path d="M3.6 2.5C3.2 2.9 3 3.5 3 4.3v15.4c0 .8.2 1.4.6 1.8l.1.1 8.6-8.6v-.2L3.6 2.5z" fill="#00E676"/>
        <path d="M15.2 15.8l-2.9-2.9v-.2l2.9-2.9.1.1 3.4 1.9c1 .6 1 1.5 0 2.1l-3.5 1.9z" fill="#FFD600"/>
        <path d="M12.3 12.7L3.6 21.4c.4.4 1 .4 1.7 0l10-5.6-3-3.1z" fill="#FF3D00"/>
        <path d="M12.3 11.3l3-3.1-10-5.6c-.7-.4-1.3-.4-1.7 0l8.7 8.7z" fill="#00B0FF"/>
      </svg>
    ),
    subText: 'GET IT ON',
    mainText: 'Google Play',
    link: '#download-play'
  },
  {
    id: 'microsoft',
    name: 'Microsoft Store',
    platform: 'Windows 11 / 10',
    rating: '4.9 ★',
    reviews: '5K+ Ratings',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1"/>
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1"/>
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1"/>
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1"/>
      </svg>
    ),
    btnIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="1"/>
        <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="1"/>
        <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="1"/>
        <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="1"/>
      </svg>
    ),
    subText: 'Get it from',
    mainText: 'Microsoft',
    link: '#download-microsoft'
  }
];

const AppAvailability = () => {
  const navigate = useNavigate();
  return (
    <section className="app-availability-section" id="availability">
      {/* Outer Section Background */}
      <div className="availability-outer-bg">
        <div className="bg-dots-pattern dots-left"></div>
        <div className="bg-dots-pattern dots-right"></div>
        <div className="bg-gradient-glow glow-top-purple"></div>
      </div>

      <div className="container availability-container">

        {/* Main Inner White Card Box */}
        <div className="store-banner-card">
          
          {/* Top-Right Handwritten Annotation with text on right of arrow */}
          <div className="handwritten-annotation">
            <svg className="curved-arrow" width="38" height="34" viewBox="0 0 45 40" fill="none">
              <path d="M 38 6 C 20 6, 6 18, 12 35 M 4 27 L 12 36 L 20 28" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="handwritten-text">Software On<br/>Every Platform.</span>
          </div>

          <div className="store-banner-content">

            {/* Left Content Area */}
            <div className="banner-left-col">
              <h2 className="banner-heading">
                Also <span className="purple-text">Available On</span>
              </h2>

              <p className="banner-subtext">
                Download our native apps for iOS, macOS, Android, and Windows with instant sync across all your devices.
              </p>
            </div>

            {/* Right Side: 3 White Store Cards */}
            <div className="banner-cards-col">
              {storeCards.map((card) => (
                <div key={card.id} className="store-app-card">
                  
                  {/* Top Row: Icon + Rating Pill */}
                  <div className="app-card-top">
                    <div className="app-icon-square">
                      {card.icon}
                    </div>
                    <div className="app-rating-pill">
                      <span className="rating-score">{card.rating}</span>
                      <span className="rating-count">{card.reviews}</span>
                    </div>
                  </div>

                  {/* App Info */}
                  <div className="app-info-block">
                    <h3 className="app-title">{card.name}</h3>
                    <span className="app-platform">{card.platform}</span>
                  </div>

                  {/* Dark Download Pill Button */}
                  <button type="button" className="dark-download-btn" onClick={() => navigate('/download')}>
                    <div className="btn-brand-icon">
                      {card.btnIcon}
                    </div>
                    <div className="btn-labels">
                      <span className="btn-sub">{card.subText}</span>
                      <span className="btn-main">{card.mainText}</span>
                    </div>
                    <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Slogan Divider */}
        <div className="slogan-divider">
          <div className="slogan-line"></div>
          <span className="slogan-text">WORK SMARTER &nbsp;•&nbsp; ANYWHERE &nbsp;•&nbsp; ON ANY DEVICE</span>
          <div className="slogan-line"></div>
        </div>

      </div>
    </section>
  );
};

export default AppAvailability;
