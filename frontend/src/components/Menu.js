import React from 'react';

const Menu = () => {
  const dummyMenu = [
    { id: 1, name: 'Pizza', price: 12.99, description: 'Cheese pizza with extra toppings' },
    { id: 2, name: 'Burger', price: 8.99, description: 'Beef burger with fries' },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {dummyMenu.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
