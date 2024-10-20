import React from "react";
import { useNavigate } from "react-router-dom";
const PlantItemsList = ({
  imageUrl,
  iconUrl,
  title,
  description,
  price,
  discountedPrice,
  rating,
}) => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleAddToCart = () => {
    navigate("/cart"); // Navigate to the /cart route when the button is clicked
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%", // Ensure the container is responsive
        maxWidth: "268px", // Add a maximum width if necessary, so zooming doesn't break the layout
        height: "auto",
        marginRight: "10px", // Fixed right margin
        marginBottom: "30px",
        marginLeft: "10px", // Optionally add left margin for consistency
        boxSizing: "border-box", // Ensure margins and paddings are included in width calculations
      }}
    >
      {/* First Div for Product Image and View Product Button */}
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "45px",
            height: "43px",
            padding: "10px 0 0 0",
          }}
        >
          <img
            src={iconUrl}
            alt="icon"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* Image */}
        <div style={{ width: "100%", height: "246px" }}>
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            width: "100%",
            height: "36px",
            background: "rgba(22, 83, 21, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "50%",
              height: "23px",
              background: "transparent",
              border: "none",
              color: "rgba(255, 255, 255, 1)",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
            }}
          >
            View Product
          </button>
        </div>
      </div>

      {/* Heading Below View Product Button */}
      <h2
        style={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: 500,
          lineHeight: "30px",
          color: "rgba(0, 0, 0, 1)",
          marginTop: "10px",
        }}
      >
        {title}
      </h2>

      {/* Text Below Heading */}
      <p
        style={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          color: "rgba(131, 131, 131, 1)",
          marginBottom: "10px",
        }}
      >
        {description}
      </p>

      {/* Price and Rating */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="https://via.placeholder.com/87x19" // Placeholder for rating
            alt="Rating"
            style={{ width: "87px", height: "19px" }}
          />
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "rgba(165, 161, 161, 1)",
              marginLeft: "10px",
            }}
          >
            {rating}
          </p>
        </div>

        {/* Price Information */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgba(94, 90, 90, 0.7)",
            }}
          >
            ₹ {price}
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: "30px",
              color: "rgba(94, 90, 90, 1)",
              marginLeft: "10px",
            }}
          >
            ₹ {discountedPrice}
          </p>
        </div>
      </div>

      {/* Button Row */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            width: "91px",
            height: "24px",
            background: "rgba(20, 77, 20, 1)",
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            marginRight: "10px",
          }}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <button
          style={{
            width: "12px",
            height: "30px",
            background: "transparent",
            border: "none",
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "30px",
            marginRight: "10px",
          }}
        >
          -
        </button>
        <button
          style={{
            width: "92px",
            height: "23px",
            background: "rgba(20, 77, 20, 1)",
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 500,
            lineHeight: "22.5px",
          }}
        >
          Buy on Rent
        </button>
        <button
          style={{
            width: "14px",
            height: "30px",
            background: "transparent",
            border: "none",
            color: "rgba(255, 255, 255, 1)",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "30px",
            marginRight: "10px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default PlantItemsList;
