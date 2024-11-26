import React from 'react';
import './SpecialDish.css';
import { Link } from 'react-router-dom';

const SpecialDish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">
      <div className="special-dish-banner">
        <img src="/assets/images/special-dish-banner.jpg" alt="special dish" className="img-cover" loading="lazy" />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">
          <img src="/assets/images/badge-1.png" alt="badge" className="abs-img" />

          <p className="section-subtitle label-2">Special Dish</p>
          <h2 className="headline-1 section-title">Tandoor Chicken</h2>
          <p className="section-text">
            "Tandoor chicken: Juicy and smoky, a flavor-packed delight from the clay oven." <br />
            "Experience the irresistible allure of tandoor chicken, where tender meat meets fiery spices."
          </p>

          <div className="wrapper">
            {/* <del className="del body-3">$40.00</del> */}
            <span className="span body-1">Rs. 350</span>
          </div>

          <Link to="/menu" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>
            <span className="text text-2" aria-hidden="true">View All Menu</span>
          </Link>
        </div>
      </div>

      <img src="/assets/images/shape-4.png" alt="" className="shape shape-1" />
      <img src="/assets/images/shape-9.png" alt="" className="shape shape-2" />
    </section>
  );
};

export default SpecialDish;
