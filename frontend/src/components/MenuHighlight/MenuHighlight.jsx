import React from 'react';
import './MenuHighlight.css';
import { Link } from 'react-scroll';

const MenuHighlight = () => {
  const menuItems = [
    {
      id: 1,
      image: '/assets/images/IMG-20231102-WA0004.jpg',
      title: 'Paneer Roll',
      price: 'Rs.100',
      description: 'Paneer roll, a flavorful vegetarian delight!',
      link: '/menu.html',
    },
    {
      id: 2,
      image: '/assets/images/IMG-20231102-WA0008.jpg',
      title: 'Samosa',
      price: 'Rs.15',
      description: 'Crispy samosa, a spicy triangular treat!',
      link: '/menu.html',
    },
    {
      id: 3,
      image: '/assets/images/IMG-20231102-WA0007.jpg',
      title: 'Kachori',
      price: 'Rs.15',
      description: 'Kachori, a spicy and crispy snack.',
      link: '/menu.html',
    },
    {
      id: 4,
      image: '/assets/images/IMG-20231102-WA0009.jpg',
      title: 'VadaPav',
      price: 'Rs.20',
      description: 'Vadapav, the street food sensation.',
      link: '/menu.html',
    },
    {
      id: 5,
      image: '/assets/images/IMG-20231102-WA0013.jpg',
      title: 'Fresh Lassi',
      price: 'Rs.50',
      description: 'Fresh lassi, a cool and creamy refreshment.',
      link: '/menu.html',
      badge: 'Seasonal',
    },
    {
      id: 6,
      image: '/assets/images/IMG-20231102-WA0017.jpg',
      title: 'Mocktail',
      price: 'Rs.55',
      description: 'Mocktail, a non-alcoholic delight.',
      link: '/menu.html',
    },
  ];

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">
        <p className="section-subtitle text-center label-2">Special Selection</p>
        <h2 className="headline-1 section-title text-center">Menu Highlight</h2>

        <ul className="grid-list">
          {menuItems.map(item => (
            <li key={item.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                  <img src={item.image} alt={item.title} className="img-cover1" loading="lazy" />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <a href={item.link} className="card-title">{item.title}</a>
                    </h3>
                    {item.badge && <span className="badge label-1">{item.badge}</span>}
                    <span className="span title-2">{item.price}</span>
                  </div>
                  <p className="card-text label-1">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">8:00 am</span> to <span className="span">9:00 pm</span>
        </p>

        <Link to="menu" smooth={true} duration={500} className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>

        <img src="/assets/images/shape-5.png" alt="shape" className="shape shape-2 move-anim" />
        <img src="/assets/images/shape-6.png" alt="shape" className="shape shape-3 move-anim" />
      </div>
    </section>
  );
};

export default MenuHighlight;
