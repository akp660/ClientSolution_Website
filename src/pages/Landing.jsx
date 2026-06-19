import React, { useState, useEffect } from 'react';
import '../styles/Landing.css';

const Landing = ({ onEnter, onLogin, onSignUp }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

  

  return (
    <div className="landing-page">
         <div
    className="tracking-circle"
    style={{
      left: `${cursorPos.x}px`,
      top: `${cursorPos.y}px`,
    }}
  ></div>
      {/* Navbar */}
      <header className="landing-navbar">
        <div className="landing-container navbar-content">
          <div className="landing-logo">
            <div className="logo-circle">CS</div>
            <span>Client Solution.Ai</span>
          </div>
          <div className="nav-buttons">
            <button className="btn-login" onClick={onLogin}>Log In</button>
            <button className="btn-signup" onClick={onSignUp}>Sign Up</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="landing-main">
        <div className="landing-container">
          <div className="landing-content">
            {/* Decorative circles */}
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>

            {/* Main Heading */}
            <h1 className="landing-title">
              AI-Powered Revenue Infrastructure That
              <br />
              <span className="title-highlight">Drives Industrial Sales</span>
            </h1>

            {/* CTA Buttons */}
            <div className="landing-buttons">
              {/*<button className="btn-demo">Book your live Demo Now</button>*/}
              <button 
                className="btn-discover"
                onMouseEnter={() => setIsHovered('discover')}
                onMouseLeave={() => setIsHovered(null)}
                onClick={onEnter}
              >
                Discover more about platform
              </button>
            </div>
          </div>

          {/* Right side message */}
          <div className="landing-message">
           {/*} <p>Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>*/}
          </div>
        </div>

        {/* Chat icons */}
        <div className="chat-icons">
          <div className="chat-icon whatsapp">
            <span>💬</span>
          </div>
          <div className="chat-icon messenger">
            <span>💭</span>
            <span className="notification-badge">1</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
