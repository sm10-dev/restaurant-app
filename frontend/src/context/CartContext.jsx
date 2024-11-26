import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(basket));
  }, [basket]);

  const increment = (item) => {
    setBasket((prev) => {
      const existingItem = prev.find((x) => x.id === item.id);
      if (existingItem) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const decrement = (item) => {
    setBasket((prev) => {
      const existingItem = prev.find((x) => x.id === item.id);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
        );
      } else {
        return prev.filter((x) => x.id !== item.id);
      }
    });
  };

  const clearCart = () => {
    setBasket([]);
  };

  return (
    <CartContext.Provider value={{ basket, increment, decrement, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
