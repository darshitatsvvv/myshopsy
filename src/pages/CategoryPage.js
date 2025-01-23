import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams();

  const products = [
    { id: 1, name: "Wireless Headphones", category: "electronics", price: 99.99 },
    { id: 2, name: "Smart Watch", category: "electronics", price: 149.99 },
    { id: 3, name: "Gaming Laptop", category: "electronics", price: 1299.99 },
    { id: 4, name: "4K Smart TV", category: "electronics", price: 499.99 },
    { id: 5, name: "Bluetooth Speaker", category: "electronics", price: 49.99 },
    { id: 6, name: "Fitness Tracker", category: "accessories", price: 79.99 },
    { id: 7, name: "Shirts", category: "clothing", price: 29.99 }, 
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.category?.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textTransform: "uppercase", marginBottom: "20px" }}>
        {categoryName || "Category"}
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>
              <p style={{ fontSize: "16px", color: "#555" }}>
                Price: ${product.price.toFixed(2)}
              </p>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "18px", color: "#555" }}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
