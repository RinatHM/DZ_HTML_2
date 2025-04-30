import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img src="/img_head1.svg" alt="fotoQ" />
        </Link>
        <Link to="/catalog-old">
          <img src="/img_head2.svg" alt="Каталог" />
        </Link>
      </div>
      <div className="head_head2">
          <Link to="/cart">
          <img src="/img_head1_1.svg" alt="Каталог" />
        </Link>
          
        <Link to="/catalog">
          <img className="null" src="/img_head1_2.svg" alt="Catalog2" />
          </Link>
           <Link to="/cartreg">
           <img className="null" src="/img_head1_3.svg" alt="" />
           </Link>
          
        </div>
    </div>
  );
};

export default Header;