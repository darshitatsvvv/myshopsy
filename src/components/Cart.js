import React from "react";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <h2>Your cart is empty.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
