import api from './api';

export const getMenuItems = () => {
  return api.get('/menu');
};

export const getPopularDishes = () => {
  return api.get('/menu/popular');
};

export const getSpecialDish = () => {
  return api.get('/menu/special');
};
