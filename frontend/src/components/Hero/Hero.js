import React, { useEffect, useState } from 'react';
import { getSpecialDish } from '../../services/menuService';

function Hero() {
  const [specialDish, setSpecialDish] = useState(null);

  useEffect(() => {
    getSpecialDish()
      .then((response) => setSpecialDish(response.data))
      .catch((error) => console.error('Error fetching special dish:', error));
  }, []);

  if (!specialDish) return null;

  return (
    <section className="hero text-center" id="home">
      <div className="hero-content">
        <img
          src={specialDish.imageUrl}
          alt={specialDish.name}
          className="hero-image"
        />
        <h1 className="hero-title">{specialDish.name}</h1>
        <p className="hero-description">{specialDish.description}</p>
        <a href="/menu" className="btn btn-primary">
          View Our Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;
