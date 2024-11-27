// src/pages/FeedbackPage.jsx

import React, { useState } from 'react';
import './FeedbackPage.css';

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (feedback.trim() === '') {
      alert('Please enter your feedback.');
      return;
    }
    // Discard the feedback; no storage or processing
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <section className="section feedback-page" aria-label="feedback-page">
      <div className="container">
        <h2 className="headline-1 section-title text-center">Feedback</h2>

        {submitted ? (
          <p className="thank-you-message text-center">Thank you for your feedback!</p>
        ) : (
          <form className="feedback-form" onSubmit={handleSubmitFeedback}>
            <div className="form-group">
              <label htmlFor="feedback" className="label-1">Your Feedback:</label>
              <textarea
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="We value your feedback..."
                className="input-field"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <span className="text text-1">Submit Feedback</span>
              <span className="text text-2" aria-hidden="true">Submit Feedback</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default FeedbackPage;
