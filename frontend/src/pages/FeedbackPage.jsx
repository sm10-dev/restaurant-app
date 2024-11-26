// src/pages/FeedbackPage.jsx

import React, { useState } from 'react';
import './FeedbackPage.css';
import { getOrderById } from '../services/orderService';
import { submitFeedback } from '../services/feedbackService';

function FeedbackPage() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [feedbacks, setFeedbacks] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOrderSearch = async () => {
    try {
      const { data } = await getOrderById(orderId);
      setOrder(data);
      setSubmitted(false);
    } catch (error) {
      console.error('Error fetching order:', error);
      alert('Order not found.');
    }
  };

  const handleRatingChange = (itemId, rating) => {
    setFeedbacks({ ...feedbacks, [itemId]: rating });
  };

  const handleSubmitFeedback = async () => {
    try {
      await submitFeedback({ orderId, feedbacks });
      alert('Feedback submitted successfully!');
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <section className="section feedback-page" aria-label="feedback-page">
      <div className="container">
        <h2 className="headline-1 section-title text-center">Feedback</h2>

        {!order ? (
          <div className="order-search">
            <p className="body-2">Enter your Order ID to provide feedback:</p>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="input-field"
              placeholder="Order ID"
            />
            <button className="btn btn-secondary" onClick={handleOrderSearch}>
              Search Order
            </button>
          </div>
        ) : submitted ? (
          <p className="body-2 text-center">Thank you for your feedback!</p>
        ) : (
          <div className="feedback-form">
            <p className="body-2">Order ID: {order.orderId}</p>
            <ul className="feedback-items">
              {order.items.map((item) => (
                <li key={item.id} className="feedback-item">
                  <p className="item-name">{item.name}</p>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${feedbacks[item.id] >= star ? 'selected' : ''}`}
                        onClick={() => handleRatingChange(item.id, star)}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <button className="btn btn-secondary" onClick={handleSubmitFeedback}>
              Submit Feedback
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeedbackPage;
