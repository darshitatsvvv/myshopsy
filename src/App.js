import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Category Page */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Product Details Page */}
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
