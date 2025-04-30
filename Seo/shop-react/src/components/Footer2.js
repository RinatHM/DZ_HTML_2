import React from 'react';
import './Footer.css';

const Footer2 = () => {
  return (
    <footer className="foot">
      {/* <div className="foot_1">
        <div className="delivery">
          <img src="/truck_img.svg" alt="truck_img" />
          <h2 className="deliv">Free Delivery</h2>
          <p className="world">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
        <div className="sales">
          <img src="/sales_img.svg" alt="sales_img" />
          <h2 className="deliv">Sales & discounts</h2>
          <p className="world">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
        <div className="quality">
          <img src="/corona_img.svg" alt="corona_imgfoto" />
          <h2 className="deliv">Quality assurance</h2>
          <p className="world">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
        </div>
      </div> */}

      <div className="foot_2">
        <div className="foot_2_1">
          <img src="/img_foot_2_1.svg" alt="foot_2_1" />
          <p className="foot_2_1_replika">"Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span className="foot_2_1_replika2">a pulvinar purus condimentum</span>"</p>
        </div>
        <div className="foot_2_2">
          <h2 className="foot_2_2_text1">SUBSCRIBE</h2>
          <h3 className="foot_2_2_text2">FOR OUR NEWLETTER AND PROMOTION</h3>
          <div className="foot_2_2_subscribe-container">
            <input type="email" className="foot_2_2_subscribe-container_email-input" placeholder="Enter your email" />
            <button className="foot_2_2_subscribe-container_subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="foot_3">
        <div className="foot_3_1">© 2023 Brand All Rights Reserved.</div>
        <div className="foot_3_2">
          <div className="foot_simb1">
            <div className="foot_simb3"><img src="/facebook.svg" alt="foot_2_1" /></div>
          </div>
          <div className="foot_simb1">
            <div className="foot_simb3"><img src="/instagram.svg" alt="foot_2_1" /></div>
          </div>
          <div className="foot_simb1">
            <div className="foot_simb3"><img src="/simb3.svg" alt="foot_2_1" /></div>
          </div>
          <div className="foot_simb1">
            <div className="foot_simb3"><img src="/simb4.svg" alt="foot_2_1" /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;