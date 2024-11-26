import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: '/assets/images/hero-slider-1.jpg',
      subtitle: 'Tradational & Hygine',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      id: 2,
      image: '/assets/images/hero-slider-2.jpg',
      subtitle: 'Delightful Experience',
      title: 'Flavors Inspired by the Seasons',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      id: 3,
      image: '/assets/images/hero-slider-3.jpg',
      subtitle: 'Amazing & Delicious',
      title: 'Where every flavor tells a story',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current]);

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider">
        {slides.map((slide, index) => (
          <li
            className={`slider-item ${index === current ? 'active' : ''}`}
            key={slide.id}
          >
            <div className="slider-bg">
              <img src={slide.image} alt="" className="img-cover" loading="lazy" />
            </div>
            <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>
            <h1 className="display-1 hero-title slider-reveal">{slide.title}</h1>
            <p className="body-2 hero-text slider-reveal">{slide.text}</p>
            <Link to="/menu" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>
              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className="slider-btn prev" aria-label="slide to previous" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button className="slider-btn next" aria-label="slide to next" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>

      <button
        className="hero-btn has-after"
        onClick={() => window.location.href = '/cart'}
      >
        <img src="/assets/images/hero-icon.png" width="48" height="48" alt="booking icon" loading="lazy" />
        <span className="label-2 text-center span">Orders</span>
      </button>
    </section>
  );
};

export default Hero;
