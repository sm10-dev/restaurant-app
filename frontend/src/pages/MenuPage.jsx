// src/pages/MenuPage.jsx

import React, { useEffect, useState, useContext } from 'react';
import './MenuPage.css';
import { fetchMenuItems } from '../services/menuService';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const { basket, increment, decrement } = useContext(CartContext);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/menu')
      .then((response) => {
        setMenuItems(response.data)
      });
  }, []);

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

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section className="section menu-page" aria-label="menu-page">
      <div className="container">

        <h2 className="headline-1 section-title text-center">Our Menu</h2>

        {categories.map((category) => (
          <div key={category}>
            <h3 className="category-title">{category}</h3>
            <ul className="grid-list">
              {menuItems.filter(item => item.category === category).map((item) => (
                <li key={item.id} className="menu-page-item">
                  <div className="menu-page-card">
                    <img src={item.imageUrl} alt={item.itemName} className="menu-page-img" loading="lazy" />
                    <div className="menu-page-details">
                      <h3 className="menu-page-title">{item.itemName}</h3>
                      <p className="menu-page-description">{item.description}</p>
                      <div className="menu-page-footer">
                        <span className="menu-page-price">Rs. {item.price}</span>
                        {getItemQuantity(item.id) === 0 ? (
                          <button className="btn btn-secondary" onClick={() => handleAddToCart(item)}>
                            Add to Cart
                          </button>
                        ) : (
                          <div className="quantity-controls">
                            <button onClick={() => handleDecrement(item)} aria-label={`Decrease quantity of ${item.name}`}>-</button>
                            <span>{getItemQuantity(item.id)}</span>
                            <button onClick={() => handleAddToCart(item)} aria-label={`Increase quantity of ${item.name}`}>+</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
}

export default MenuPage;
