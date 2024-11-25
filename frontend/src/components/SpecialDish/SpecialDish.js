import React, { useEffect, useState } from 'react';
import { getSpecialDish } from '../../services/menuService';

function SpecialDish() {
  const [specialDish, setSpecialDish] = useState(null);

  useEffect(() => {
    getSpecialDish()
      .then((response) => setSpecialDish(response.data))
      .catch((error) => console.error('Error fetching special dish:', error));
  }, []);

  if (!specialDish) return null;

  return (
    <section className="special-dish-section">
      <h2>Special Dish</h2>
      <div className="special-dish-content">
        <img src={specialDish.imageUrl} alt={specialDish.name} />
        <div className="special-dish-details">
          <h3>{specialDish.name}</h3>
          <p>{specialDish.description}</p>
          <span>Rs. {specialDish.price}</span>
        </div>
      </div>
    </section>
  );
}

export default SpecialDish;
