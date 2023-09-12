import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="product-button">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
