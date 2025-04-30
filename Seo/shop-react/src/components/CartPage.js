import React, { useState } from 'react';
import './CartPage.css';
import Header from '../pages/Header';

const CartPage = () => {

  return (
    <div className="app-container">
      {/* <div className="head">
        <div className="head_head1">
          <img src="/img_head1.svg" alt="fotoQ" />
          <img src="/img_head2.svg" alt="fotoL" />
        </div>
        <div className="head_head2">
          <img src="/img_head1_1.svg" alt="head1" />
          <img src="/img_head1_2.svg" alt="head1_2" />
          <img src="/img_head1_3.svg" alt="head1_3" />
        </div>
      </div> */}
      <Header />
      <main className="app-container">
        <div className="sample">
          <div className="sample_head">SHOPPING CART</div>
        </div>

        <div className="container">
          <div className="container_1">
            <div className="block block_img">
              <img className="block block_fotomen" src="/fotomen.svg" alt="Product" />
              <div className="block_part1">
                <div className="text">
                  <h2>MANGO PEOPLE</h2>
                  <h2>T-SHIRT</h2>
                </div>
                <div className="text">
                  <h3 className="text_price">Price: <span className="text_price_300">$300</span></h3>
                  <h3 className="text_price">Color: Red</h3>
                  <h3 className="text_price">Size: Xl</h3>
                  <h3 className="text_price">Quantity: 2</h3>
                </div>
              </div>
              <img className="krest" src="/krest.svg" alt="Remove" />
            </div>

            <div className="block block_img">
              <img src="/fotomen2.svg" alt="Product" />
              <div className="block_part1">
                <div className="text">
                  <h2>MANGO PEOPLE</h2>
                  <h2>T-SHIRT</h2>
                </div>
                <div className="text">
                  <h3 className="text_price">Price: <span className="text_price_300">$300</span></h3>
                  <h3 className="text_price">Color: Red</h3>
                  <h3 className="text_price">Size: Xl</h3>
                  <h3 className="text_price">Quantity: 2</h3>
                </div>
              </div>
              <img className="krest" src="/krest.svg" alt="Remove" />
            </div>

            <div className="block block_end">
              <div className="block_end_clear">CLEAR SHOPPING CART</div>
              <div className="block_end_continue">CONTINUE SHOPPING</div>
            </div>
          </div>

          <div className="container_2">
            <div className="block block_adress">
              <h2 className="block_adress_ship">SHIPPING ADRESS</h2>
              <div className="block_adress_city block_adress_city_bang">Bangladesh</div>
              <div className="block_adress_city">State</div>
              <div className="block_adress_city">Postcode / Zip</div>
              <div className="block_adress_post">GET A QUOTE</div>
            </div>
            <div className="block block_price">
              <h2 className="block_price_sub">SUB TOTAL $900</h2>
              <h2 className="block_price_grand">GRAND TOTAL $900</h2>
              <img src="/Shape.svg" alt="Divider" />
              <div className="block_price_procesed">PROCEED TO CHECKOUT</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="foot">
        <div className="foot_2">
          <div className="foot_2_1">
            <img src="/img_foot_2_1.svg" alt="Testimonial" />
            <p className="foot_2_1_replika">
              "Vestibulum quis porttitor dui! Quisque viverra nunc mi,{" "}
              <span className="foot_2_1_replika2">a pulvinar purus condimentum</span>"
            </p>
          </div>
          <div className="foot_2_2">
            <h2 className="foot_2_2_text1">SUBSCRIBE</h2>
            <h3 className="foot_2_2_text2">FOR OUR NEWLETTER AND PROMOTION</h3>
            <div className="foot_2_2_subscribe-container">
              <input
                type="email"
                className="foot_2_2_subscribe-container_email-input"
                placeholder="Enter your email"
              />
              <button className="foot_2_2_subscribe-container_subscribe-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="foot_3">
          <div className="foot_3_1">© 2023 Brand All Rights Reserved.</div>
          <div className="foot_3_2">
            <div className="foot_simb1">
              <img src="/simb3.svg" alt="Social icon" />
            </div>
            <div className="foot_simb1">
              <img src="/simb4.svg" alt="Social icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default CartPage;