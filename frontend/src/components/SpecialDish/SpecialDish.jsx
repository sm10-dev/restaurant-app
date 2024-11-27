// src/components/SpecialDish/SpecialDish.jsx

import React from 'react';
import './SpecialDish.css';
import { Link } from 'react-router-dom';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="container">
        <div className="special-dish-banner">
          <img
            src="/assets/images/special-dish-banner.jpg"
            alt="Special Dish - Tandoor Chicken"
            className="special-dish-img"
            loading="lazy"
          />
        </div>

        <div className="special-dish-content bg-black-10">
          <img src="/assets/images/badge-1.png" alt="Special Dish Badge" className="abs-img" />

          <p className="section-subtitle label-2">Special Dish</p>
          <h2 className="headline-1 section-title">Tandoor Chicken</h2>
          <p className="section-text">
            "Tandoor chicken: Juicy and smoky, a flavor-packed delight from the clay oven." <br />
            "Experience the irresistible allure of tandoor chicken, where tender meat meets fiery spices."
          </p>

          <div className="price-wrapper">
            {/* <del className="del body-3">$40.00</del> */}
            <span className="span body-1">Rs. 350</span>
          </div>

          <Link to="/menu" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>
            <span className="text text-2" aria-hidden="true">View All Menu</span>
          </Link>
        </div>
      </div>

      <img src="/assets/images/shape-4.png" alt="Decorative Shape" className="shape shape-1" />
      <img src="/assets/images/shape-9.png" alt="Decorative Shape" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
