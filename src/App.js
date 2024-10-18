// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import AddToCartModal from "./components/AddToCartModal";
import ThankYouPage from "./components/ThankYouPage";
import "./App.css"; // Add CSS animations

const products = [
  /* mock data */
];

function App() {
  const [cartModal, setCartModal] = useState(null);

  const handleAddToCart = (product) => {
    setCartModal(product);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="product-list">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>

      {cartModal && (
        <AddToCartModal
          product={cartModal}
          onClose={() => setCartModal(null)}
        />
      )}
    </Router>
  );
}

export default App;
