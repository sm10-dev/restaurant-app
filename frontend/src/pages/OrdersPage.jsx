import React, { useEffect, useState } from 'react';
import './OrdersPage.css';

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from localStorage or API
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <section className="section orders-page" aria-label="orders-page">
      <div className="container">

        <h2 className="headline-1 section-title text-center">Your Orders</h2>

        {orders.length === 0 ? (
          <p className="orders-empty text-center">You have not placed any orders yet.</p>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.orderId} className="order-item">
                <h3 className="order-id">Order ID: {order.orderId}</h3>
                <p className="order-date">Date: {order.date}</p>
                <ul className="order-items">
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} - Rs. {item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <p className="order-total">Total: Rs. {order.total}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default OrdersPage;
