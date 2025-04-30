import React from 'react';
import Header from '../pages/Header';
import Footer2 from './Footer2';
import './CartContent.css';

const CartProvider = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="sample">REGISTRATION</div>
      
      <div className="container">
        <div className="form-container">
          <h2 className="name">Your Name</h2>
          <div className="name-inputs">
            <input type="text" className="first-name" placeholder="First Name"/>
            <input type="text" className="last-name" placeholder="Last Name"/>
          </div>
          <div className="gender-checkboxes">
            <label>
              <input id="radio-1" type="radio" name="gender" value="M" defaultChecked />
              Male
            </label> 
            <label>
              <input id="radio-2" type="radio" name="gender" value="F" />
              Female
            </label> 
          </div>
          <div className="login-details">
            <h3 className="name">Login Details</h3>
            <div className="email-input">
              <input type="email" className="email" placeholder="Email"/>
            </div>
            <div className="password-input">
              <input type="password" className="password" placeholder="Password"/>
            </div>
            <p className="password-requirements">
              Please use 8 or more characters, with at least 1 number and a mixture of uppercase and lowercase letters
            </p>
          </div>
          <button className="join-now">JOIN NOW →</button>
        </div>
        
        <div className="loyalty-container">
          <h2 className="loyalty">LOYALTY HAS ITS PERKS</h2>
          <p>Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
          <ul className="custom-list">
            <li>15% off welcome offer</li>
            <li>Free shipping, returns and exchanges on all orders</li>
            <li>$10 off a purchase on your birthday</li>
            <li>Early access to products</li>
            <li>Exclusive offers & rewards</li>
          </ul>
        </div>
      </div>
      
      <Footer2 />
    </div>
  );
};

export default CartProvider;