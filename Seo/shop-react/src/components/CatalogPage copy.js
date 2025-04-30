import React, { useState } from 'react';
// import ProductCard from '../components/ProductCard';

const CatalogPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  
  // Пример данных товаров
  const products = [
    {
      id: 1,
      name: 'ELLERY X M\'O CAPSULE',
      description: 'Known for her sculptural takes on traditional tailoring...',
      price: 52.00,
      image: '/img/footer1.svg',
      sizes: ['XS', 'S', 'M', 'L']
    },
    // ... другие товары
  ];

  const filteredProducts = selectedSize 
    ? products.filter(p => p.sizes.includes(selectedSize))
    : products;

  return (
    <div className="catalog-page">
      {/* <h1>Catalog</h1>
      
      <div className="filters">
        <h3>Filter by size:</h3>
        {['XS', 'S', 'M', 'L'].map(size => (
          <button 
            key={size}
            className={selectedSize === size ? 'active' : ''}
            onClick={() => setSelectedSize(size === selectedSize ? null : size)}
          >
            {size}
          </button>
        ))}
      </div>
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            // onAddToCart={/* функция добавления в корзину */} 
          {/* />
        ))}
      </div> */} */}
    </div>
  );
};

export default CatalogPage;