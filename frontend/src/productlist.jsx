import React from 'react';

function Productlist({ product }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.thumbnail} alt={product.title} />
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price}</span>
          <button className="product-button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Productlist;