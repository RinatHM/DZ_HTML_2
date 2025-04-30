import React from 'react';
import './CatalogPage.css';
import { Link } from 'react-router-dom';
import Footer2 from './Footer2';
const CatalogPage = () => {
  return (
    <div>
      <div className="header">
        <div className="head_head1" >
          <Link to="/">
            <img src="/img_head1.svg" alt="fotoQ" />
          </Link>
          <Link to="/catalog">
            <img src="/img_head2.svg" alt="fotoL" />
          </Link>
        </div>
        <div className="head_head2">
          <Link to="/cart">
            <img src="/img_head1_1.svg" alt="Каталог" />
          </Link>


          <img className="null" src="/img_head1_2.svg" alt="" />
          <img className="null" src="/img_head1_3.svg" alt="" />
        </div>
      </div>


      <div className="sample">
        <h2 className="sample_head">NEW ARRIVALS</h2>
        <div className="sample_links">
          <div className="sample_box"><a href="" className="sample_link">HOME</a></div>
          <div className="sample_box"><a href="" className="sample_link">MEN</a></div>
          <div className="sample_box"><a href="" className="sample_link">NEW ARRIVALS</a></div>
        </div>
      </div>

      <div className="sample_body">
        <div className="sample_body_left" id="leftScroll">
          <img src="/sample_left.svg" alt="Левый образ" />
        </div>
        <div className="sample_foto" id="mainImageContainer">
          <img src="/sample_foto.svg" alt="Основной образ" id="mainImage" />
        </div>
        <div className="sample_body_right" id="rightScroll">
          <img src="/sample_right.svg" alt="Правый образ" />
        </div>
      </div>

      <div className="description">
        <div className="description_wc">WOMEN COLLECTION</div>
        <img src="/border.svg" alt="border" />
        <div className="description_slogan">MOSCHINO CHEAP AND CHIC</div>
        <div className="description_content">
          Compellingly actualize fully researched processes before proactive outsourcing. <br />
          Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.
        </div>
        <div className="description_price-container">$561</div>
        <img src="/Line_description.svg" alt="line" />
        <div className="description_bredcrumbs">
          <div className="description_bredcrumbs_one">
            <h2 className="description_bredcrumbs_one_menu">CHOOSE COLOR</h2>
            <img src="/Vector_description.svg" alt="vector" />
          </div>
          <div className="description_bredcrumbs_to">
            <h2 className="description_bredcrumbs_to_menu">CHOOSE SIZE</h2>
            <img src="/Vector_description.svg" alt="vector" />
          </div>
          <div className="description_bredcrumbs_free">
            <h2 className="description_bredcrumbs_free_menu">QUANTITY</h2>
            <img src="/Vector_description.svg" alt="vector" />
          </div>
        </div>
        <div className="description_card">
          <img src="/cart.svg" alt="cart" />
          <h2>Add to Cart</h2>
        </div>
      </div>

      <div className="top3">
        <div className="top3_block4">
          <div className="top3_block4_img">
            <img src="/footer4.svg" alt="foto4" />
          </div>
          <div className="top3_block4_text">
            <a href="#" className="top3_block4_text_1">ELLERY X M'O CAPSULE</a>
            <div className="top3_block4_text_2">
              <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            </div>
            <div className="top3_block4_text_3">
              <p>$52.00</p>
            </div>
          </div>
        </div>
        <div className="top3_block4 footer3">
          <div className="top3_block4_img">
            <img src="/footer3.svg" alt="foto3" />
          </div>
          <div className="top3_block4_text">
            <a href="#" className="top3_block4_text_1">ELLERY X M'O CAPSULE</a>
            <div className="top3_block4_text_2">
              <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            </div>
            <div className="top3_block4_text_3">
              <p>$52.00</p>
            </div>
          </div>
        </div>
        <div className="top3_block4 footer6">
          <div className="top3_block4_img">
            <img src="/footer6.svg" alt="foto6" />
          </div>
          <div className="top3_block4_text">
            <a href="#" className="top3_block4_text_1">ELLERY X M'O CAPSULE</a>
            <div className="top3_block4_text_2">
              <p>Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
            </div>
            <div className="top3_block4_text_3">
              <p>$52.00</p>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </div>

  );
};

export default CatalogPage;