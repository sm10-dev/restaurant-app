import React, { useState } from 'react';

const RatingForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to backend API
    console.log({ rating, comment });
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating (1-5):
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </label>
      <br />
      <label>
        Comments:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default RatingForm;
