import React, { useState } from 'react';
import '../styles/Auth.css';

const Login = ({ onBackToLanding }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you would typically send login data to your backend
    console.log('Login attempt:', { email, password });
    alert('Login successful! (This is a demo)');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">

  <button className="back-btn" onClick={onBackToLanding}>
    ← Back
  </button>

  <h1>Welcome Back</h1>
  <p>Log in to your account</p>
</div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: '' });
              }}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: '' });
                }}
                className={errors.password ? 'input-error' : ''}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="btn-submit">Sign In</button>
        </form>

        <div className="auth-footer">
          <p>New to our platform? <span onClick={() => console.log('navigate to signup')}>Create an Account</span></p>
        </div>

        {/*<div className="divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">
            <div className="social-logo-google"></div>
            Continue with Google
          </button>
          <button className="social-btn microsoft">
            <div className="social-logo-microsoft"></div>
            Continue with Microsoft
          </button>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="circle circle-login-1"></div>
      <div className="circle circle-login-2"></div>
    </div></div>
  );
};

export default Login;
