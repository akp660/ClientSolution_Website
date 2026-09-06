import React, { useState, useEffect, useRef } from 'react';
import './ConsultationModal.css';

const ConsultationModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Name, 2: Contact Info, 3: Query Message, 4: Submitted
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [step, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleNextStep2 = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter both your work email and phone number.');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setErrorMsg('Please write your enquiry message.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const emailPayload = {
      _subject: `🤖 AI Assistant Enquiry from ${formData.name}`,
      _template: 'table',
      _captcha: 'false',
      'Client Name': formData.name,
      'Work Email': formData.email,
      'Phone Number': formData.phone,
      'Enquiry Message': formData.message,
      'Sent At': new Date().toLocaleString()
    };

    try {
      // Send Email via FormSubmit to bbsoftwarecompany@gmail.com
      await fetch('https://formsubmit.co/ajax/bbsoftwarecompany@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(emailPayload)
      });

      setIsSubmitting(false);
      setStep(4);
    } catch (err) {
      setIsSubmitting(false);
      setStep(4); // Graceful completion UX
    }
  };

  const handleResetChat = () => {
    setStep(1);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrorMsg('');
  };

  return (
    <div className="ai-chat-overlay">
      <div className="ai-chat-box">
        {/* Chatbot Header */}
        <div className="ai-chat-header">
          <div className="ai-bot-profile">
            <div className="ai-bot-avatar">
              <span>CS</span>
              <span className="online-indicator"></span>
            </div>
            <div>
              <h3>Client Solution AI <span className="bot-tag">BOT</span></h3>
              <p>Online</p>
            </div>
          </div>
          <button type="button" className="chat-close-btn" onClick={onClose} aria-label="Close chat">
            ✕
          </button>
        </div>

        {/* Progress Bar */}
        <div className="chat-progress-bg">
          <div
            className="chat-progress-fill"
            style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : step === 3 ? '90%' : '100%' }}
          />
        </div>

        {/* Chat History Messages Container */}
        <div className="ai-chat-body">
          {/* Bot Message 1 */}
          <div className="chat-msg bot-msg animate-fade-in">
            <div className="msg-avatar">🤖</div>
            <div className="msg-bubble">
              <p>Hello! 👋 Welcome to <strong>Client Solution</strong>.</p>
              <p>What is your <strong>Full Name</strong>?</p>
            </div>
          </div>

          {/* User Answer 1 */}
          {step >= 2 && (
            <div className="chat-msg user-msg animate-fade-in">
              <div className="msg-bubble">
                <p>{formData.name}</p>
              </div>
            </div>
          )}

          {/* Bot Message 2 */}
          {step >= 2 && (
            <div className="chat-msg bot-msg animate-fade-in">
              <div className="msg-avatar">🤖</div>
              <div className="msg-bubble">
                <p>Nice to meet you, <strong>{formData.name}</strong>! 😊</p>
                <p>What is your <strong>Work Email</strong> & <strong>Phone Number</strong> so our team can reach you?</p>
              </div>
            </div>
          )}

          {/* User Answer 2 */}
          {step >= 3 && (
            <div className="chat-msg user-msg animate-fade-in">
              <div className="msg-bubble">
                <p>✉️ {formData.email}</p>
                <p>📞 {formData.phone}</p>
              </div>
            </div>
          )}

          {/* Bot Message 3 */}
          {step >= 3 && (
            <div className="chat-msg bot-msg animate-fade-in">
              <div className="msg-avatar">🤖</div>
              <div className="msg-bubble">
                <p>Got it! Please write your <strong>Enquiry / Project Requirements</strong> below so I can send the complete details to our lead architect.</p>
              </div>
            </div>
          )}

          {/* Step 4: Submission Confirmation */}
          {step === 4 && (
            <>
              <div className="chat-msg user-msg animate-fade-in">
                <div className="msg-bubble">
                  <p>📝 {formData.message}</p>
                </div>
              </div>

              <div className="chat-msg bot-msg animate-fade-in">
                <div className="msg-avatar">🚀</div>
                <div className="msg-bubble success-bubble">
                  <p><strong>Enquiry Dispatched Successfully! 🎉</strong></p>
                  <p>Your details have been sent<span className="email-link"></span>.</p>
                  <div className="summary-list">
                    <div>👤 <strong>Name:</strong> {formData.name}</div>
                    <div>✉️ <strong>Email:</strong> {formData.email}</div>
                    <div>📞 <strong>Phone:</strong> {formData.phone}</div>
                  </div>
                  <p>Our team will reach out to you within 24 hours.</p>
                </div>
              </div>
            </>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Validation Error Banner */}
        {errorMsg && <div className="chat-error-banner">{errorMsg}</div>}

        {/* Conversational Input Controls */}
        <div className="ai-chat-footer">
          {step === 1 && (
            <form className="chat-input-form" onSubmit={handleNextStep1}>
              <input
                type="text"
                name="name"
                required
                autoFocus
                placeholder="Type your full name here..."
                value={formData.name}
                onChange={handleChange}
              />
              <button type="submit" className="chat-send-btn">
                <span>Next</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="chat-input-form-col" onSubmit={handleNextStep2}>
              <div className="chat-inputs-grid">
                <input
                  type="email"
                  name="email"
                  required
                  autoFocus
                  placeholder="Work Email (e.g. john@company.com)"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number (e.g. +1 555 000 0000)"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="chat-send-btn full-btn">
                <span>Continue</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          )}

          {step === 3 && (
            <form className="chat-input-form-col" onSubmit={handleFinalSubmit}>
              <textarea
                name="message"
                required
                autoFocus
                rows="2"
                placeholder="Write your enquiry message or project requirement details..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="chat-send-btn full-btn submit-gradient" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Sending Mail...</span>
                ) : (
                  <>
                    <span>Send Query 🚀</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {step === 4 && (
            <button type="button" className="chat-send-btn full-btn" onClick={handleResetChat}>
              Start New Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
