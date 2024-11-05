// src/components/OrderTracking.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTracking = ({ order }) => {
  const [orderStatus, setOrderStatus] = useState('Preparing');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!order) return;

    const fetchOrderStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/orders/${order.orderId}/status`);
        setOrderStatus(response.data.status);
      } catch (err) {
        console.error('Error fetching order status:', err);
        setError(true);
      }
    };

    // Polling every 5 seconds
    const interval = setInterval(fetchOrderStatus, 5000);
    fetchOrderStatus(); // Initial fetch

    return () => clearInterval(interval);
  }, [order]);

  if (!order) return <p>No active order.</p>;
  if (error) return <p>Error fetching order status.</p>;

  return (
    <div>
      <h2>Order Tracking</h2>
      <p>Order ID: {order.orderId}</p>
      <p>Status: {orderStatus}</p>
    </div>
  );
};

export default OrderTracking;
