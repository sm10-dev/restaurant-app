import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src="/assets/images/restlogo.svg" alt="Restaurant Home" />
            </Link>
            <address className="body-4">
              Opposite IIT Bombay, Powai, Mumbai
            </address>
            <a href="mailto:booking@restaurant.com" className="body-4 contact-link">
              booking@restaurant.com
            </a>
            <a href="tel:+911234567890" className="body-4 contact-link">
              Booking Request: +91-0000000000
            </a>
            <p className="body-4">Open: 09:00 am - 10:00 pm</p>
            <div className="separator"></div>
            <p className="title-1">Get News & Offers</p>
            <p className="label-1">
              Subscribe us & Get <span className="span">25% Off.</span>
            </p>
            <form className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
          <ul className="footer-list">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="footer-link">
                Menus
              </Link>
            </li>
            <li>
              <Link to="/orders" className="footer-link">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="footer-link">
                Feedback
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Google Map
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Restaurant. All Rights Reserved | Crafted by
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              pawan0777
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
