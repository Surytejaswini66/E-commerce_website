// components/ProductCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { motion } from "framer-motion";

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thank-you?product=${product.name}`);
  };

  return (
    <motion.div
      className="product-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="buttons">
        <button onClick={handleViewProduct}>View Product</button>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
