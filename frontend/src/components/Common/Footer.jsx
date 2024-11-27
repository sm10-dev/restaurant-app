// src/components/Common/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: 'url("/assets/images/footer-bg.jpg")' }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <Link to="/" className="logo">
              <img src="/assets/images/restlogo.svg" alt="Restaurant Home" loading="lazy" />
            </Link>
            <address className="body-4">Opposite IIT Bombay, Powai, Mumbai</address>
            <a href="mailto:booking@restaurant.com" className="body-4 contact-link">booking@restaurant.com</a>
            <a href="tel:+91 1234567890" className="body-4 contact-link">Booking Request : +91-1234567890</a>
            <p className="body-4">Open : 09:00 am - 10:00 pm</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>

            <p className="title-1">Get News & Offers</p>
            <p className="label-1">
              Subscribe us & Get <span className="span">25% Off.</span>
            </p>

            <form className="input-wrapper">
              <div className="icon-wrapper">
                <span role="img" aria-label="mail">📧</span>
                <input type="email" name="email_address" placeholder="Your email" autoComplete="off" className="input-field" />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">Subscribe</span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li>
              <Link to="/" className="label-2 footer-link hover-underline">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="label-2 footer-link hover-underline">Menus</Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="label-2 footer-link hover-underline">Facebook</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="label-2 footer-link hover-underline">Instagram</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="label-2 footer-link hover-underline">Twitter</a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="label-2 footer-link hover-underline">Youtube</a>
            </li>
            <li>
              <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer" className="label-2 footer-link hover-underline">Google Map</a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 Restaurant. All Rights Reserved | Crafted by{' '}
            <a href="https://github.com/sm10-dev/restaurant-app" target="_blank" rel="noopener noreferrer" className="link">3_Rookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
