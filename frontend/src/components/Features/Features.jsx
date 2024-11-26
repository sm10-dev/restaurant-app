import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '/assets/images/features-icon-1.png',
      title: 'Hygienic Food',
      description: 'Hygienic food, your health is our priority.',
    },
    {
      id: 2,
      icon: '/assets/images/features-icon-2.png',
      title: 'Fresh Environment',
      description: 'Fresh environment, the perfect backdrop for your experience.',
    },
    {
      id: 3,
      icon: '/assets/images/features-icon-3.png',
      title: 'Skilled Chefs',
      description: 'Skilled chefs, crafting culinary masterpieces.',
    },
    {
      id: 4,
      icon: '/assets/images/features-icon-4.png',
      title: 'Event & Party',
      description: 'Event & party, let\'s celebrate in style!',
    },
  ];

  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strength</h2>

        <ul className="grid-list">
          {features.map(feature => (
            <li className="feature-item" key={feature.id}>
              <div className="feature-card">
                <div className="card-icon">
                  <img src={feature.icon} alt={`${feature.title} Icon`} loading="lazy" />
                </div>
                <h3 className="title-2 card-title">{feature.title}</h3>
                <p className="label-1 card-text">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <img src="/assets/images/shape-7.png" alt="shape" className="shape shape-1" />
        <img src="/assets/images/shape-8.png" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Features;
