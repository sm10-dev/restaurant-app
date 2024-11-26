import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

function CartPage() {
  const { basket, increment, decrement, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    // Simulate order placement
    if (basket.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    const orderId = Math.floor(Math.random() * 1000000);
    const orderDate = new Date().toLocaleString();
    const order = {
      orderId,
      date: orderDate,
      items: basket,
      total: calculateTotal(),
    };

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    alert(`Order placed successfully! Your Order ID is ${orderId}`);
    clearCart();
  };

  return (
    <section className="section cart-page" aria-label="cart-page">
      <div className="container">

        <h2 className="headline-1 section-title text-center">Your Cart</h2>

        {basket.length === 0 ? (
          <p className="cart-empty text-center">Your cart is empty.</p>
        ) : (
          <div className="cart-items">

            {basket.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-img" loading="lazy" />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-price">Rs. {item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => decrement(item)} aria-label={`Decrease quantity of ${item.name}`}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increment(item)} aria-label={`Increase quantity of ${item.name}`}>+</button>
                  </div>
                  <p className="cart-item-subtotal">Subtotal: Rs. {item.price * item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h3>Total: Rs. {calculateTotal()}</h3>
              <button className="btn btn-secondary checkout-btn" onClick={handleCheckout}>
                Place Order
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default CartPage;
