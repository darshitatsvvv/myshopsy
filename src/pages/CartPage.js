import React from "react";

function CartPage({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
