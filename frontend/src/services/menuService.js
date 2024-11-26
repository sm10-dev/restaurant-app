// import api from './api';

// export const getMenuItems = () => {
//   return api.get('/menu');
// };

// src/services/menuService.js

import api from './api';

// src/services/menuService.js

export const fetchMenuItems = async () => {
  // Simulate an API call
  return [
    {
      id: 1,
      name: 'Paneer Roll',
      description: 'Paneer roll, a flavorful vegetarian delight!',
      price: 100,
      imageUrl: '/assets/images/IMG-20231102-WA0004.jpg',
      category: 'Snacks',
    },
    {
      id: 2,
      name: 'Samosa',
      description: 'Crispy samosa, a spicy triangular treat!',
      price: 15,
      imageUrl: '/assets/images/IMG-20231102-WA0008.jpg',
      category: 'Snacks',
    },
    {
      id: 3,
      name: 'Kachori',
      description: 'Kachori, a spicy and crispy snack.',
      price: 15,
      imageUrl: '/assets/images/IMG-20231102-WA0007.jpg',
      category: 'Snacks',
    },
    {
      id: 4,
      name: 'Vada Pav',
      description: 'Vada Pav, the street food sensation.',
      price: 20,
      imageUrl: '/assets/images/IMG-20231102-WA0009.jpg',
      category: 'Snacks',
    },
    {
      id: 5,
      name: 'Butter Chicken',
      description: 'Butter Chicken, creamy and delicious.',
      price: 250,
      imageUrl: '/assets/images/butter-chicken.jpg',
      category: 'Main Course',
    },
    {
      id: 6,
      name: 'Paneer Tikka Masala',
      description: 'Paneer Tikka Masala, spicy and flavorful.',
      price: 220,
      imageUrl: '/assets/images/paneer-tikka-masala.jpg',
      category: 'Main Course',
    },
    {
      id: 7,
      name: 'Fresh Lassi',
      description: 'Fresh lassi, a cool and creamy refreshment.',
      price: 50,
      imageUrl: '/assets/images/IMG-20231102-WA0013.jpg',
      category: 'Drinks',
    },
    {
      id: 8,
      name: 'Mocktail',
      description: 'Mocktail, a non-alcoholic delight.',
      price: 55,
      imageUrl: '/assets/images/IMG-20231102-WA0017.jpg',
      category: 'Drinks',
    },
  ];
};


export const getPopularDishes = () => {
  return api.get('/menu/popular');
};

export const getSpecialDish = () => {
  return api.get('/menu/special');
};
