import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // Handle continue shopping button click
  const handleContinueShopping = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div
      style={{
        width: "453px",
        height: "661px",
        margin: "0 auto", // Center the div horizontally
        gap: "0px",
        opacity: "1",
        background: "rgba(255, 255, 255, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center content horizontally
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Paragraph with content: "Your Cart" */}
      <p
        style={{
          width: "80px",
          height: "26px",
          marginTop: "37px",
          fontFamily: "Poppins",
          fontSize: "17px",
          fontWeight: "400",
          lineHeight: "25.5px",
          textAlign: "center",
          color: "rgba(15, 72, 17, 1)",
        }}
      >
        Your Cart
      </p>

      {/* Horizontal line */}
      <hr
        style={{
          width: "389px",
          height: "0px",
          marginTop: "50px",
          border: "0.8px solid rgba(176, 176, 176, 1)",
          opacity: "1",
        }}
      />

      {/* Paragraph with content: "Congratulations Order Placed!" */}
      <p
        style={{
          width: "230px",
          height: "83px",
          marginTop: "50px",
          fontFamily: "Poppins",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "36px",
          textAlign: "center",
          color: "rgba(22, 83, 21, 1)",
        }}
      >
        Congratulations Order Placed!
      </p>

      {/* Image */}
      <img
        src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgKKIrx1v2QUz4fX2mBvb3nPC3aOp2RcHYU7~TgXtlP4G4lDYmL0xuOY7DKJKdhum-USfGEqnBwhWQZ1nqspzsS8tmvwwkqXSHQoA7p3jz5L1sVJfMMbHBBLleqQpbQbNwTLtaEuEnYK5~sLf~p-nuYM8RLyt5KvfMwFOgM~UylWTzJOSmInN47VMWplVhiGENFa3Bl8MtN6A6cosEVsCZF~oosEu4IYdGCxnl69-nex04r6gR3ZoReAVb4ND0084qLGAwKXwNRfJPlT8MlEC1s2CZJArhC6Tw3CKWGQ2wz0Fr9y6xQlBLFXrKTrbMaXcgJps09Yvxi9EZ4zPgKRqg__" // Replace with actual image URL
        alt="Order Placed"
        style={{
          width: "97px",
          height: "98px",
          marginTop: "40px",
        }}
      />

      {/* Paragraph with content: "Thank you for choosing Chaperone services." */}
      <p
        style={{
          width: "422px",
          height: "39px",
          marginTop: "40px",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "24px",
          textAlign: "center",
          color: "rgba(22, 83, 21, 1)",
        }}
      >
        Thank you for choosing Chaperone services. We will soon get in touch
        with you!
      </p>

      {/* Button container */}
      <div
        style={{
          width: "307px",
          height: "45px",
          marginTop: "40px",
        }}
      >
        {/* Continue Shopping button */}
        <button
          onClick={handleContinueShopping}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(22, 83, 21, 1)",
            border: "none",
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "20px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
