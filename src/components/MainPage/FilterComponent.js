import React, { useState } from "react";

const FilterComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });

  const filterItems = [
    { label: "Type of Plants", icon: "+" },
    { label: "Price", icon: "+" },
    { label: "Nursery", icon: "+" },
    { label: "Ideal Plants Location", icon: "+" },
    { label: "Indoor/ Outdoor", icon: "+" },
    { label: "Maintenance", icon: "+" },
    { label: "Plant Size", icon: "+" },
    { label: "Water Schedule", icon: "+" },
    { label: "Color", icon: "+" },
    { label: "Seasonal", icon: "+" },
    { label: "Light Efficient", icon: "+" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div
      style={{
        width: "304px",
        height: "715px",
        position: "relative",
        gap: "0px",
        marginLeft: "20px",
        opacity: "1", // Changed from "0px" to "1" to make it visible
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "18px 21px",
          opacity: "1", // Changed to "1" to make it visible
        }}
      >
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19.36px",
            textAlign: "left",
            color: "rgba(110, 110, 110, 1)",
          }}
        >
          Filter
        </span>
        <span
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19.36px",
            textAlign: "left",
            color: "rgba(110, 110, 110, 1)",
          }}
        >
          CLEAR ALL
        </span>
      </div>

      <hr
        style={{
          width: "263px",
          border: "1px solid rgba(168, 168, 168, 1)",
          margin: "0 21px",
          opacity: "1", // Changed to "1"
        }}
      />

      {filterItems.map((item, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: `${index === 0 ? "22px" : "20px"} 21px`,
              opacity: "1", // Changed to "1"
            }}
          >
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19.36px",
                textAlign: "left",
                color: "rgba(110, 110, 110, 1)",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19.36px",
                textAlign: "left",
                color: "rgba(110, 110, 110, 1)",
                cursor: index === 0 ? "pointer" : "default",
              }}
              onClick={index === 0 ? toggleDropdown : null}
            >
              {item.icon}
            </span>
          </div>

          {index === 0 && isDropdownOpen && (
            <div style={{ marginLeft: "21px" }}>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  width: "200px",
                }}
              >
                <li>
                  <input
                    type="checkbox"
                    checked={selectedOptions.option1}
                    onChange={() => handleCheckboxChange("option1")}
                  />
                  <label style={{ marginLeft: "8px" }}>Lorem Ipsum (12)</label>
                </li>
                <hr style={{ width: "100%", border: "1px solid #ddd" }} />
                <li>
                  <input
                    type="checkbox"
                    checked={selectedOptions.option2}
                    onChange={() => handleCheckboxChange("option2")}
                  />
                  <label style={{ marginLeft: "8px" }}>Lorem Ipsum (23)</label>
                </li>
                <hr style={{ width: "100%", border: "1px solid #ddd" }} />
                <li>
                  <input
                    type="checkbox"
                    checked={selectedOptions.option3}
                    onChange={() => handleCheckboxChange("option3")}
                  />
                  <label style={{ marginLeft: "8px" }}>Lorem Ipsum (41)</label>
                </li>
              </ul>
            </div>
          )}

          <hr
            style={{
              width: "263px",
              border: "1px solid rgba(168, 168, 168, 1)",
              margin: "0 21px",
              opacity: "1", // Changed to "1"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterComponent;
