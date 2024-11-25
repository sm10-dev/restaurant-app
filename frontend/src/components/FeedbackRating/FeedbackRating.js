import React, { useState } from 'react';
import { submitFeedback } from '../../services/feedbackService';

function FeedbackRating() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
    rating: 5,
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback(feedback)
      .then(() => {
        alert('Feedback submitted successfully!');
        setFeedback({ name: '', email: '', message: '', rating: 5 });
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
        alert('Failed to submit feedback.');
      });
  };

  return (
    <section className="feedback-section">
      <h2>Feedback & Rating</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={feedback.message}
          onChange={handleChange}
          required
          className="input-field"
        ></textarea>
        <label>
          Rating:
          <select
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
            className="input-field"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn btn-secondary">
          Submit Feedback
        </button>
      </form>
    </section>
  );
}

export default FeedbackRating;
