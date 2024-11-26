// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css'; // Ensure global styles and CSS variables are defined here
import App from './App';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
