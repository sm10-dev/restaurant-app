import api from './api';

export const createOrder = (orderData) => {
  return api.post('/orders', orderData);
};

export const trackOrder = (orderId) => {
  return api.get(`/orders/${orderId}`);
};
