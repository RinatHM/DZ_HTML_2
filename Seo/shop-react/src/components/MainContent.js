import React from 'react';
import './MainContent.css';

const MainContent = () => {
  const products = [
    {
      id: 1,
      image: "/footer1.svg",
      title: "ELLERY X M'O CAPSULE",
      description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      price: "$52.00"
    },
    // Добавьте остальные 5 товаров по аналогии
  ];

  return (
    <main>
      <div className="top1">
        <div className="top-head">
          <img className="/img_head" src="/img_head.svg" alt="top-head" />
        </div>
        <div className="text_head">
          <div className="brand">
            <p>THE BRAND</p>
            <span className="brand1">OF LUXERIOUS</span>
            <span className="brand2">FASHION</span>
          </div>
        </div>
      </div>

      <div className="top2 center">
        <div className="top_body1">
          <img className="img_top2" src="/women_1body.svg" alt="" />
        </div>
        <div className="top_body1">
          <img className="img_top2" src="/men_2body.svg" alt="" />
        </div>
        <div className="top_body1">
          <img className="img_top2" src="/kids_3body.svg" alt="xz" />
        </div>
      </div>

      <div className="top_body4">
        <img className="body-ACCESORIES" src="/4body-ACCESORIES.svg" alt="xz" />
      </div>

      <div className="title">Fetured Items</div>
      <div className="text">Shop for items based on what we featured in this week</div>

      <div className="top3">
        {products.map(product => (
          <div key={product.id} className={`top3_block${product.id}`}>
            <div className="top3_img">
              <img src={product.image} alt={`foto${product.id}`} />
            </div>
            <div className="top3_text">
              <div className="top3_text1">
                <p>{product.title}</p>
              </div>
              <div className="top3_text2">
                <p>{product.description}</p>
              </div>
              <div className="top3_text3">
                <p>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="text_end">Browse All Product</div>
      </div>
    </main>
  );
};

export default MainContent;