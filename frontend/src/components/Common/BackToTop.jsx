import React, { useEffect, useState } from 'react';
import './BackToTop.css';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="back-top-btn" aria-label="back to top">
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </button>
      )}
    </div>
  );
}

export default BackToTop;
