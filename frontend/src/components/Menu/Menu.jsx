// src/components/Menu/Menu.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { fetchMenuItems } from '../../services/menuService'; // Ensure this service is correctly implemented
import axios from 'axios';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    const getMenuItems = () => {
      
      try {
        axios
      .get('http://localhost:8080/api/menu')
      .then((response) => {
        setMenuItems(response.data.slice(0, 6))
      });} catch (err) {
        setError('Failed to fetch menu items.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  if (loading) {
    return (
      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="menu-subtitle text-center label-2">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="menu-subtitle text-center label-2">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">

        <p className="menu-subtitle text-center label-2">Special Selection</p>

        <h2 className="headline-1 menu-section-title text-center">Menu Highlight</h2>

        <ul className="menu-grid-list">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-grid-item">
              <div className="menu-highlight-card">
                <figure className="menu-highlight-banner">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="menu-highlight-img"
                    loading="lazy"
                  />
                </figure>
                <div className="menu-highlight-content">
                  <div className="menu-highlight-title-wrapper">
                    <h3 className="menu-highlight-title">
                      <Link to={item.link} className="menu-highlight-title-link">
                        {item.name}
                      </Link>
                    </h3>
                    <span className="menu-highlight-price">Rs.{item.price}</span>
                  </div>
                  {item.badge && <span className="menu-highlight-badge">{item.badge}</span>}
                  <p className="menu-highlight-description">
                    {item.description}
                  </p>
                  <div className="menu-highlight-actions">
                    {/* Add your Add to Cart functionality here if needed */}
                    <Link to="/menu" className="menu-highlight-view-details-btn">
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span>8:00 am</span> to <span>9:00 pm</span>
        </p>

        <Link to="/menu" className="menu-primary-button">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>

        <img src="/assets/images/shape-5.png" alt="Decorative Shape" className="menu-shape shape-2 move-anim" />
        <img src="/assets/images/shape-6.png" alt="Decorative Shape" className="menu-shape shape-3 move-anim" />

      </div>
    </section>
  );
}

export default Menu;
