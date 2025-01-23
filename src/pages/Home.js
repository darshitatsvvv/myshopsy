import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/200?text=Wireless+Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "https://via.placeholder.com/200?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Gaming Laptop",
      price: 1299.99,
      image: "https://via.placeholder.com/200?text=Gaming+Laptop",
    },
    {
      id: 4,
      name: "4K Smart TV",
      price: 499.99,
      image: "https://via.placeholder.com/200?text=4K+Smart+TV",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 49.99,
      image: "https://via.placeholder.com/200?text=Bluetooth+Speaker",
    },
    {
      id: 6,
      name: "Fitness Tracker",
      price: 79.99,
      image: "https://via.placeholder.com/200?text=Fitness+Tracker",
    },
  ];

  const categories = [
    { id: 1, name: "Electronics", image: "https://via.placeholder.com/200?text=Electronics" },
    { id: 2, name: "Clothing", image: "https://via.placeholder.com/200?text=Clothing" },
    { id: 3, name: "Accessories", image: "https://via.placeholder.com/200?text=Accessories" },
    { id: 4, name: "Home Decor", image: "https://via.placeholder.com/200?text=Home+Decor" },
  ];

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "20px" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
          color: "#fff",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Welcome to Your E-Commerce Store
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          Discover the best deals on your favorite products!
        </p>
        <Link
          to="/products"
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#ff6347",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Featured Products</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h3 style={{ fontSize: "20px", margin: "15px 0" }}>{product.name}</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>${product.price}</p>
              <Link
  to={`/product/${product.id}`}
  style={{
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  }}
>
  View Details
</Link>

            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Shop by Category</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.name?.toLowerCase() || "unknown"}`}
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
                fontSize: "18px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <img
                src={category.image}
                alt={category.name || "Unknown"}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
              {category.name || "Unknown Category"}
            </Link>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        style={{
          marginTop: "60px",
          padding: "40px 20px",
          backgroundColor: "#ff6347",
          color: "#fff",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
          Don't Miss Out!
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Sign up for our newsletter to get the latest updates and offers.
        </p>
        <form style={{ display: "inline-flex", gap: "10px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              width: "250px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#fff",
              color: "#ff6347",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;
