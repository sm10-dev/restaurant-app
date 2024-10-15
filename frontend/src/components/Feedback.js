import React, { useState } from 'react';
import RatingForm from './RatingForm';

const Feedback = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = () => {
    setFeedbackSubmitted(true);
  };

  return (
    <div>
      <h2>Feedback and Rating</h2>
      {!feedbackSubmitted ? (
        <RatingForm onSubmit={handleFeedbackSubmit} />
      ) : (
        <p>Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default Feedback;