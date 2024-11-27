// src/components/Menu/MenuHighlight.jsx

import React, { useContext } from 'react';
import './MenuHighlight.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const MenuHighlight = () => {
  const { basket, increment, decrement } = useContext(CartContext);

  const menuItems = [
    {
      id: 1,
      image: '/assets/images/IMG-20231102-WA0004.jpg',
      title: 'Paneer Roll',
      price: 100,
      description: 'Paneer roll, a flavorful vegetarian delight!',
      link: '/menu',
    },
    {
      id: 2,
      image: '/assets/images/IMG-20231102-WA0008.jpg',
      title: 'Samosa',
      price: 15,
      description: 'Crispy samosa, a spicy triangular treat!',
      link: '/menu',
    },
    {
      id: 3,
      image: '/assets/images/IMG-20231102-WA0007.jpg',
      title: 'Kachori',
      price: 15,
      description: 'Kachori, a spicy and crispy snack.',
      link: '/menu',
    },
    {
      id: 4,
      image: '/assets/images/IMG-20231102-WA0009.jpg',
      title: 'VadaPav',
      price: 20,
      description: 'Vadapav, the street food sensation.',
      link: '/menu',
    },
    {
      id: 5,
      image: '/assets/images/IMG-20231102-WA0013.jpg',
      title: 'Fresh Lassi',
      price: 50,
      description: 'Fresh lassi, a cool and creamy refreshment.',
      link: '/menu',
      badge: 'Seasonal',
    },
    {
      id: 6,
      image: '/assets/images/IMG-20231102-WA0017.jpg',
      title: 'Mocktail',
      price: 55,
      description: 'Mocktail, a non-alcoholic delight.',
      link: '/menu',
    },
  ];

  const handleAddToCart = (item) => {
    increment(item);
  };

  const handleDecrement = (item) => {
    decrement(item);
  };

  const getItemQuantity = (itemId) => {
    const item = basket.find((x) => x.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <section className="section menu-highlight" aria-label="menu-highlight" id="menu-highlight">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Menu Highlight</h2>

        <ul className="menu-highlight-grid">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-highlight-item">
              <div className="menu-card">
                <figure className="card-banner">
                  <img src={item.image} alt={item.title} className="menu-img-cover" loading="lazy" />
                </figure>
                <div className="card-content">
                  <div className="title-wrapper">
                    <h3 className="card-title">
                      <Link to={item.link} className="card-title-link">
                        {item.title}
                      </Link>
                    </h3>
                    <span className="card-price">Rs.{item.price}</span>
                  </div>
                  {item.badge && <span className="badge">{item.badge}</span>}
                  <p className="card-text">{item.description}</p>
                  <div className="cart-actions">
                    {getItemQuantity(item.id) === 0 ? (
                      <button className="menu-btn-secondary" onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </button>
                    ) : (
                      <div className="quantity-controls">
                        <button onClick={() => handleDecrement(item)} aria-label={`Decrease quantity of ${item.title}`}>
                          -
                        </button>
                        <span>{getItemQuantity(item.id)}</span>
                        <button onClick={() => handleAddToCart(item)} aria-label={`Increase quantity of ${item.title}`}>
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span>8:00 am</span> to <span>9:00 pm</span>
        </p>

        <Link to="/menu" className="menu-btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>

        <img src="/assets/images/shape-5.png" alt="Decorative Shape" className="shape shape-2 move-anim" />
        <img src="/assets/images/shape-6.png" alt="Decorative Shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
};

export default MenuHighlight;
