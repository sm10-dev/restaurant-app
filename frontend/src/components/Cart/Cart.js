import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../services/orderService';

function Cart() {
  const { basket, increment, decrement, clearCart } = useContext(CartContext);

  const calculateTotal = () => {
    return basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    const orderData = {
      userEmail: 'john@example.com', // Replace with actual user email
      items: basket.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
      })),
      totalAmount: calculateTotal(),
    };

    createOrder(orderData)
      .then(() => {
        alert('Order placed successfully!');
        clearCart();
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        alert('Failed to place order.');
      });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {basket.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {basket.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>Price: Rs. {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => decrement(item)}>-</button>
                  <button onClick={() => increment(item)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: Rs. {calculateTotal()}</h3>
          <button onClick={handleCheckout} className="btn btn-primary">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
