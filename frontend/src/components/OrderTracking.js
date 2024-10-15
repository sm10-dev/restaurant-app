import React, { useState, useEffect } from 'react';

const OrderTracking = () => {
  const [orderStatus, setOrderStatus] = useState("Preparing");

  useEffect(() => {
    // Simulate API call for order status updates
    const interval = setInterval(() => {
      setOrderStatus("Ready for Pickup");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Order Tracking</h2>
      <p>Current Status: {orderStatus}</p>
    </div>
  );
};

export default OrderTracking;