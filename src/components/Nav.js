// src/components/Nav.js
import React from "react";
import "./Nav.css"; // Assuming we'll style in an external CSS file

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <p className="shipping-info">Free Shipping on orders above 999/-</p>
        <p className="contact-info">Call us on: +91 98768 05120</p>
      </div>
    </nav>
  );
};

export default Nav;
