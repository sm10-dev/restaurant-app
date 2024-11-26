import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    {
      id: 1,
      image: '/assets/images/service-1.jpg',
      title: 'Breakfast',
      link: '/menu',
    },
    {
      id: 2,
      image: '/assets/images/service-2.jpg',
      title: 'Main Course',
      link: '/menu',
    },
    {
      id: 3,
      image: '/assets/images/desserts.webp',
      title: 'Desserts',
      link: '/menu',
    },
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
          At our establishment, we take pride in offering top-notch excellence, from quality ingredients to exceptional service. Our skilled chefs and fresh environment create a memorable culinary experience for every occasion.
        </p>

        <ul className="grid-list">
          {services.map(service => (
            <li key={service.id}>
              <div className="service-card">
                <Link to={service.link} className="has-before hover:shine">
                  <figure className="card-banner img-holder" style={{ '--width': '285', '--height': '336' }}>
                    <img src={service.image} alt={service.title} className="img-cover" loading="lazy" />
                  </figure>
                </Link>
                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <Link to={service.link} className="btn-text hover-underline label-2">View Menu</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <img src="/assets/images/shape-7.png" alt="shape" className="shape shape-1 move-anim" />
        <img src="/assets/images/shape-8.png" alt="shape" className="shape shape-2 move-anim" />
      </div>
    </section>
  );
};

export default Service;
