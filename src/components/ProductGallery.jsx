import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGallery.css';

// Dans ProductGallery.js
const ProductGallery = ({ products, onProductClick }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={onProductClick} 
        />
      ))}
    </div>
  );
};
export default ProductGallery;