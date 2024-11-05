// src/components/Menu.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = ({ onOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/menu');
      setMenuItems(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching menu:', err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const handlePlaceOrder = () => {
    const orderItems = Object.entries(selectedItems).map(([itemId, quantity]) => ({
      menuItemId: itemId,
      quantity,
    }));
    onOrder(orderItems);
    // You may want to send the order to the backend here
  };

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error loading menu.</p>;

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.menu_item_id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleSelectItem(item.menu_item_id)}>Add to Order</button>
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Menu;
