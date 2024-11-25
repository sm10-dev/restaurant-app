import React, { useEffect, useState } from 'react';
import { getPopularDishes } from '../../services/menuService';

function PopularDishes() {
  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    getPopularDishes()
      .then((response) => setPopularDishes(response.data))
      .catch((error) => console.error('Error fetching popular dishes:', error));
  }, []);

  return (
    <section className="popular-dishes-section">
      <h2>Popular Dishes</h2>
      <div className="popular-dishes-grid">
        {popularDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <img src={dish.imageUrl} alt={dish.name} />
            <div className="dish-details">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <span>Rs. {dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDishes;
