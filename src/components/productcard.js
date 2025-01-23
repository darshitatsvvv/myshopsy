import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbytewebster.com%2Ffrontendprojects%2Fproductcardcss&psig=AOvVaw1_0lyaUEIzlre6_6nmFMo7&ust=1734765230686000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDpqp3mtYoDFQAAAAAdAAAAABAE" alt="" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
