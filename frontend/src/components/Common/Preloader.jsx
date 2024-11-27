import React, { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const preload = document.querySelector('.preload');
    window.addEventListener('load', () => {
      preload.classList.add('loaded');
      document.body.classList.add('loaded');
    });
  }, []);

  return (
    <div className="preload" data-preaload>
      <div className="circle"></div>
      <p className="text">3 ROOKIES</p>
    </div>
  );
};

export default Preloader;
