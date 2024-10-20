import React, { useState } from "react"; // Import useState
import "./Header.css";

const Header = () => {
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false); // State for Tools dropdown visibility
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State for Our Services dropdown visibility

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen); // Toggle Tools dropdown visibility
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen); // Toggle Our Services dropdown visibility
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
          alt="Chaperone Logo"
          className="logo-image"
        />
        <p className="logo-text">Chaperone</p>
      </div>

      {/* Routes */}
      <nav className="nav-links">
        {/* Home Route */}
        <a href="/" className="nav-link home-link">
          Home
        </a>

        {/* Plants & Pots Route */}
        <a href="/product/plants" className="nav-link plants-link">
          Plants & Pots
        </a>

        {/* Tools Option */}
        <div className="dropdown-container">
          <span className="dropdown-selected" onClick={toggleToolsDropdown}>
            Tools
          </span>
          <div className="symbols-container" onClick={toggleToolsDropdown}>
            <div className="symbol1"></div>
            <div className="symbol2"></div>
          </div>
          {isToolsDropdownOpen && ( // Conditionally render Tools dropdown menu
            <div className="dropdown-menu">
              <div className="dropdown-option">Gardening tools</div>
              <div className="dropdown-option">Pest Control</div>
              <div className="dropdown-option">Fertilizers</div>
              <div className="dropdown-option">Watering Cans</div>
              <div className="dropdown-option">Garden Accessories</div>
            </div>
          )}
        </div>

        {/* Our Services Option */}
        <div className="dropdown-container">
          <span className="dropdown-selectedd" onClick={toggleServicesDropdown}>
            Our Services
          </span>
          <div className="symbols-container" onClick={toggleServicesDropdown}>
            <div className="symbol1"></div>
            <div className="symbol2"></div>
          </div>
          {isServicesDropdownOpen && ( // Conditionally render Our Services dropdown menu
            <div className="dropdown-menu">
              <div className="dropdown-option">Book a Maali</div>
              <div className="dropdown-option">Plant Day Care</div>
              <div className="dropdown-option">Rent Plants</div>
            </div>
          )}
        </div>
        <a href="/blog" className="nav-link blog-link">
          Blog
        </a>

        {/* Our Story Route */}
        <a href="/our-story" className="nav-link our-story-link">
          Our Story
        </a>

        {/* FAQs Route */}
        <a href="/faqs" className="nav-link faqs-link">
          FAQs
        </a>
      </nav>
    </header>
  );
};

export default Header;
