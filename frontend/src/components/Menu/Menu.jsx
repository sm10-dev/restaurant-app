import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { fetchMenuItems } from '../../services/menuService';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };
    getMenuItems();
  }, []);

  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">

        <p className="section-subtitle text-center label-2">Special Selection</p>

        <h2 className="headline-1 section-title text-center">Menu Highlight</h2>

        <ul className="grid-list">

          {menuItems.map((item) => (
            <li key={item.id}>
              <div className="menu-card hover:card">
                <figure className="card-banner img-holder" style={{ '--width': '100', '--height': '100' }}>
                  <img src={item.imageUrl} width="100" height="100" loading="lazy" alt={item.name} className="img-cover" />
                </figure>
                <div>
                  <div className="title-wrapper">
                    <h3 className="title-3">
                      <Link to="/menu" className="card-title">{item.name}</Link>
                    </h3>
                    <span className="span title-2">Rs.{item.price}</span>
                  </div>
                  <p className="card-text label-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}

        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">8:00 am</span> to <span className="span">9:00 pm</span>
        </p>

        <Link to="/menu" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>
          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </Link>

        <img src="/assets/images/shape-5.png" alt="shape" className="shape shape-2 move-anim" />
        <img src="/assets/images/shape-6.png" alt="shape" className="shape shape-3 move-anim" />

      </div>
    </section>
  );
}

export default Menu;
