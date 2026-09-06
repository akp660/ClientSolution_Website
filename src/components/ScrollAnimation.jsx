import React, { useEffect, useRef, useState } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: reset if you want it to animate every time you scroll up and down
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="scroll-animation-section" ref={sectionRef}>
      <div className="gradient-background"></div>
      <div className={`text-container ${isVisible ? 'visible' : ''}`}>
        <h2 className="reveal-text">client solution</h2>
      </div>
    </section>
  );
};

export default ScrollAnimation;
