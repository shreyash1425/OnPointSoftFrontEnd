import React from 'react';
import ProductCard from './ProductCard';
import data from '../data/products.json';

const ProductList = () => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
