import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'MANGO PEOPLE T-SHIRT', price: 300, quantity: 2 },
    { id: 2, name: 'MANGO PEOPLE T-SHIRT', price: 300, quantity: 1 }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const grandTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={`/img/product${item.id}.svg`} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)} className="remove-btn">
              <img src="/img/krest.svg" alt="Remove" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-totals">
        <h2>GRAND TOTAL: ${grandTotal}</h2>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartPage;