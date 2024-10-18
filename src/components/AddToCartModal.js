// components/AddToCartModal.js
import React from "react";
import { motion } from "framer-motion";
import "./AddToCartModal.css";

const AddToCartModal = ({ product, onClose }) => {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
      >
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <button onClick={onClose}>Confirm Add to Cart</button>
      </motion.div>
    </motion.div>
  );
};

export default AddToCartModal;
