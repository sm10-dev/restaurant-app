// frontend/src/components/FeedbackRating.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css';

const FeedbackRating = () => {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the list of dishes from the customer's orders
    axios.get('/api/orders/dishes')
      .then(response => {
        setDishes(response.data);
      })
      .catch(error => {
        console.error('Error fetching dishes:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDish || !feedback || !rating) {
      setMessage('Please fill out all fields.');
      return;
    }

    const data = {
      dishId: selectedDish,
      feedbackText: feedback,
      ratingValue: rating,
    };

    axios.post('/api/feedback-rating', data)
      .then(response => {
        setMessage('Feedback submitted successfully!');
        setSelectedDish('');
        setFeedback('');
        setRating('');
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="feedback-rating">
      <h2>Rate Your Dish</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Select Dish:
          <select
            value={selectedDish}
            onChange={(e) => setSelectedDish(e.target.value)}
          >
            <option value="">--Select a Dish--</option>
            {dishes.map((dish) => (
              <option key={dish.id} value={dish.id}>
                {dish.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </label>
        <label>
          Rating:
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">--Select Rating--</option>
            {[1,2,3,4,5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackRating;
