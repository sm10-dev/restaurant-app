// src/components/Common/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
