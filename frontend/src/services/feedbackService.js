import api from './api';

export const submitFeedback = (feedbackData) => {
  return api.post('/feedback', feedbackData);
};
