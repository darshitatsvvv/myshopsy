import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  // Simulate a product database
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99, description: "High-quality wireless headphones with noise cancellation.", image: "https://via.placeholder.com/300?text=Wireless+Headphones" },
    { id: 2, name: "Smart Watch", price: 149.99, description: "Smartwatch with fitness tracking and notifications.", image: "https://via.placeholder.com/300?text=Smart+Watch" },
    { id: 3, name: "Gaming Laptop", price: 1299.99, description: "Powerful gaming laptop with high-end graphics.", image: "https://via.placeholder.com/300?text=Gaming+Laptop" },
    { id: 4, name: "4K Smart TV", price: 499.99, description: "Stunning 4K Smart TV with HDR support.", image: "https://via.placeholder.com/300?text=4K+Smart+TV" },
    { id: 5, name: "Bluetooth Speaker", price: 49.99, description: "Portable Bluetooth speaker with amazing sound quality.", image: "https://via.placeholder.com/300?text=Bluetooth+Speaker" },
    { id: 6, name: "Fitness Tracker", price: 79.99, description: "Track your fitness goals with this sleek tracker.", image: "https://via.placeholder.com/300?text=Fitness+Tracker" },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "'Arial', sans-serif" }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div>
          <h1>{product.name}</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>{product.description}</p>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Price: ${product.price.toFixed(2)}</p>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "#ff6347",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => alert("Purchase feature coming soon!")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
