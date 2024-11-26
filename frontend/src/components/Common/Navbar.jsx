import React, { useState, useContext, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../../context/CartContext';

function Navbar() {
  const { basket } = useContext(CartContext);
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation();

  const cartCount = basket.reduce((acc, item) => acc + item.quantity, 0);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
    document.body.classList.toggle('nav-active');
  };

  useEffect(() => {
    // Close the navbar when the route changes
    setIsNavActive(false);
    document.body.classList.remove('nav-active');
  }, [location]);

  return (
    <header className="header">
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbar-container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Opposite IIIT Pune, Ambegaon, Pune</span>
          </address>

          <div className="separator"></div>

          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>

          <a href="tel:+911234567890" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">+91 1234567890</span>
          </a>

          <div className="separator"></div>

          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
            </div>
            <span className="span">mail@restaurant.com</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/assets/images/restlogo.svg" width="80" height="30" alt="Restaurant - Home" loading="lazy" />
        </Link>

        {/* Navigation Links */}
        <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
          <button className="close-btn" aria-label="close menu" onClick={toggleNav}>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          {/* Navbar Logo (optional duplicate for side panel) */}
          <Link to="/" className="logo navbar-logo">
            <img src="/assets/images/restlogo.svg" width="160" height="50" alt="Restaurant - Home" loading="lazy" />
          </Link>

          {/* Navigation Links */}
          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink
                to="/"
                className={({ isActive }) => `navbar-link hover-underline ${isActive ? 'active' : ''}`}
              >
                <div className="separator"></div>
                <span className="span">Home</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/menu"
                className={({ isActive }) => `navbar-link hover-underline ${isActive ? 'active' : ''}`}
              >
                <div className="separator"></div>
                <span className="span">Menu</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/orders"
                className={({ isActive }) => `navbar-link hover-underline ${isActive ? 'active' : ''}`}
              >
                <div className="separator"></div>
                <span className="span">Orders</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink
                to="/feedback"
                className={({ isActive }) => `navbar-link hover-underline ${isActive ? 'active' : ''}`}
              >
                <div className="separator"></div>
                <span className="span">Feedback</span>
              </NavLink>
            </li>
          </ul>

          {/* Visit Us Section */}
          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>

            <address className="body-4">
              Opposite IIIT Pune, <br />
              Ambegaon BK, Pune
            </address>

            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

            <a href="mailto:booking@restaurant.com" className="body-4 sidebar-link">
              booking@restaurant.com
            </a>

            <div className="separator"></div>

            <p className="contact-label">Booking Request</p>
            <a href="tel:+91123123456" className="body-1 contact-number hover-underline">
              +91-123-123456
            </a>
          </div>

          {/* Cart Button Inside Navbar */}
          <Link to="/cart" className="btn btn-secondary cart-button">
            <span className="text text-1">Cart</span>
            <span className="text text-2" aria-hidden="true">
              Cart
            </span>
            <span className="cart-icon">
              <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>
              {cartCount > 0 && <span className="cartAmount">{cartCount}</span>}
            </span>
          </Link>
        </nav>

        {/* Open Navbar Button */}
        <button className="nav-open-btn" aria-label="open menu" onClick={toggleNav}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        {/* Overlay */}
        <div className={`overlay ${isNavActive ? 'active' : ''}`} onClick={toggleNav}></div>
      </div>
    </header>
  );
}

export default Navbar;
