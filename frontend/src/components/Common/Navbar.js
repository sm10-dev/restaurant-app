import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Navbar() {
  const { basket } = useContext(CartContext);
  const cartAmount = basket.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/restlogo.svg" alt="Restaurant - Home" />
        </Link>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/menu" className="navbar-link">
                Menu
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/orders" className="navbar-link">
                Orders
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/feedback" className="navbar-link">
                Feedback
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/cart" className="btn btn-secondary">
          Cart
          <span className="cart-icon">
            <i className="bi bi-cart2"></i>
            <span id="cartAmount" className="cartAmount">
              {cartAmount}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
