import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Tools");

  const options = [
    "Tools",
    "Gardening tools",
    "Pest Control",
    "Fertilizers",
    "Watering Cans",
    "Garden Accessories",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown-container">
      <div className="selected-option">
        <p>{selectedOption}</p>
        <div className="small-container">
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="options-container">
        {options.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => handleSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
