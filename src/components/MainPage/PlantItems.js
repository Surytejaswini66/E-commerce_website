import React, { useState } from "react";
import FilterComponent from "./FilterComponent"; // Importing the filter component
import PlantItemsContainer from "./PlantItemsContainer"; // Correct path assuming both files are in the same folder

const PlantItems = () => {
  const [selectedOption, setSelectedOption] = useState("Sort by");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex", // Use flexbox to align components horizontally
        justifyContent: "flex-start", // Aligns the items to the start
        width: "100%",
        maxWidth: "100%", // Ensures the container doesn't expand unnecessarily
        margin: "0", // Remove any external margins
        padding: "0", // Remove padding
        boxSizing: "border-box",
      }}
    >
      {/* FilterComponent */}
      <FilterComponent />

      {/* PlantItems content */}
      <div
        style={{
          flex: "1", // Ensures the plant items container takes up the remaining space
          margin: "0", // No left margin to prevent gaps between components
          padding: "0", // Remove padding inside the plant items container
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "17px",
              fontWeight: "400",
              lineHeight: "22.5px",
              color: "rgba(106, 106, 106, 1)",
            }}
          >
            300 products
          </p>

          <div
            style={{
              position: "relative",
              height: "36px",
              padding: "6px 7px",
              backgroundColor: "rgba(22, 83, 21, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              style={{
                width: "139px",
                height: "36px",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "700",
                color: "rgba(255, 255, 255, 1)",
                background: "transparent",
                border: "none",
                appearance: "none",
                cursor: "pointer",
              }}
            >
              <option value="Sort by">Sort by</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
              <option value="New Arrivals">New Arrivals</option>
            </select>

            <span
              style={{
                width: "14px",
                height: "7.1px",
                backgroundColor: "transparent",
                border: "solid rgba(255, 255, 255, 1)",
                borderWidth: "0 2px 2px 0",
                display: "inline-block",
                transform: "rotate(45deg)",
                position: "absolute",
                top: "14.45px",
                left: "118px",
              }}
            ></span>
          </div>
        </div>
        <PlantItemsContainer />
      </div>
    </div>
  );
};

export default PlantItems;
