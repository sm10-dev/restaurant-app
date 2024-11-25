import React, { useEffect, useState, useContext } from 'react';
import { getMenuItems } from '../../services/menuService';
import { CartContext } from '../../context/CartContext';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const { basket, increment, decrement } = useContext(CartContext);

  useEffect(() => {
    getMenuItems()
      .then((response) => setMenuItems(response.data))
      .catch((error) => console.error('Error fetching menu items:', error));
  }, []);

  const getQuantity = (id) => {
    const item = basket.find((x) => x.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="menu-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-item-actions">
                  <span>Rs. {item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => decrement(item)}>-</button>
                    <span>{getQuantity(item.id)}</span>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </section>
  );
}

export default Menu;
