// src/components/CustomerView.js

import React, { useState } from 'react';
import Menu from './Menu';
import OrderTracking from './OrderTracking';
import Feedback from './Feedback';
import RatingForm from './RatingForm';
import PopularDishes from './PopularDishes';
import '../styles/style.css';

const CustomerView = () => {
  const [currentView, setCurrentView] = useState('menu'); // Available views: 'menu', 'orderTracking', 'feedback', 'rating', 'popularDishes'
  const [activeOrder, setActiveOrder] = useState(null);

  const handleOrder = (orderId) => {
    setActiveOrder(orderId);
    setCurrentView('orderTracking');
  };

  const renderView = () => {
    switch (currentView) {
      case 'menu':
        return <Menu onOrder={handleOrder} />;
      case 'orderTracking':
        return <OrderTracking orderId={activeOrder} />;
      case 'feedback':
        return <Feedback />;
      case 'rating':
        return <RatingForm />;
      case 'popularDishes':
        return <PopularDishes />;
      default:
        return <Menu onOrder={handleOrder} />;
    }
  };

  return (
    <div className="customer-view">
      <header className="header">
        <h1>Welcome to Our Restaurant!</h1>
      </header>
      <nav className="navigation">
        <button onClick={() => setCurrentView('menu')}>Menu</button>
        <button onClick={() => setCurrentView('orderTracking')}>Track Order</button>
        <button onClick={() => setCurrentView('feedback')}>Feedback</button>
        <button onClick={() => setCurrentView('rating')}>Rate Us</button>
        <button onClick={() => setCurrentView('popularDishes')}>Popular Dishes</button>
      </nav>
      <div className="view-container">
        {renderView()}
      </div>
    </div>
  );
};

export default CustomerView;
