import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  // Example product data; replace with your actual data-fetching logic
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "Experience the freedom of wireless sound with our high-quality Bluetooth headphones. Designed for superior audio performance, these headphones deliver crystal-clear sound and powerful bass, perfect for music, calls, and gaming. The ergonomic design ensures all-day comfort, while the long-lasting battery provides up to 20 hours of uninterrupted playtime. With advanced noise cancellation, you can enjoy an immersive listening experience free from distractions. Easy pairing, intuitive controls, and a sleek, foldable design make these headphones a must-have for on-the-go audio enthusiasts..",
      image: "https://via.placeholder.com/300?text=Wireless+Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      description: "Smartwatch with fitness tracking and notifications.",
      image: "https://via.placeholder.com/300?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1299.99,
      description: "Powerful gaming laptop with high-end graphics.",
      image: "https://via.placeholder.com/300?text=Gaming+Laptop",
    },
    {
      id: 4,
      name: "4K Smart TV",
      price: 499.99,
      description: "Stunning 4K Smart TV with HDR support.",
      image: "https://via.placeholder.com/300?text=4K+Smart+TV",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 49.99,
      description: "Portable Bluetooth speaker with amazing sound quality.",
      image: "https://via.placeholder.com/300?text=Bluetooth+Speaker",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 79.99,
      description: "Track your fitness goals with this sleek tracker.",
      image: "https://via.placeholder.com/300?text=Fitness+Tracker",
    },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
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

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6347",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
