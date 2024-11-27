// src/components/Common/Topbar.jsx

import React from 'react';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <address className="topbar-item">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <span className="span">Opposite IIT Bombay, Powai, Mumbai</span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm-.5 9h-2v-4h2v4zm2.5 0h-1v-6h1v6z" />
            </svg>
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>

        <a href="tel:+911234567890" className="topbar-item link">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.16 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.27 1.12.33 2.33.51 3.57.51.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.03 21 3 13.97 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.18 2.45.51 3.57.09.35 0 .74-.27 1.02l-2.2 2.2z" />
            </svg>
          </div>
          <span className="span">+91-123-123456</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:booking@restaurant.com" className="topbar-item link">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4.5l-8 4.99L4 8.5V6l8 5 8-5v2.5z" />
            </svg>
          </div>
          <span className="span">booking@restaurant.com</span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
