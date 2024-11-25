import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialBasket = JSON.parse(localStorage.getItem('basket')) || [];
  const [basket, setBasket] = useState(initialBasket);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const increment = (item) => {
    const existingItem = basket.find((x) => x.id === item.id);
    if (existingItem) {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const decrement = (item) => {
    const existingItem = basket.find((x) => x.id === item.id);
    if (existingItem.quantity === 1) {
      setBasket(basket.filter((x) => x.id !== item.id));
    } else {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };

  const clearCart = () => setBasket([]);

  return (
    <CartContext.Provider value={{ basket, increment, decrement, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
