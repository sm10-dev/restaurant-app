import React, { useState } from 'react';
import { trackOrder } from '../../services/orderService';

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    trackOrder(orderId)
      .then((response) => {
        setOrderStatus(response.data.status);
      })
      .catch((error) => {
        console.error('Error tracking order:', error);
        setOrderStatus('Order not found.');
      });
  };

  return (
    <section className="order-tracking-section">
      <h2>Track Your Order</h2>
      <form onSubmit={handleTrackOrder} className="order-tracking-form">
        <input
          type="text"
          name="orderId"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="btn btn-primary">
          Track Order
        </button>
      </form>
      {orderStatus && <p className="order-status">Status: {orderStatus}</p>}
    </section>
  );
}

export default OrderTracking;
