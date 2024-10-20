import React, { useState } from "react"; // Import useState
import "./Header.css";

const Header = () => {
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false); // State for Tools dropdown visibility
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // State for Our Services dropdown visibility
  const [isMixedImagesDropdownOpen, setIsMixedImagesDropdownOpen] =
    useState(false); // State for Mixed Images dropdown visibility
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false); // State for Cart dropdown visibility

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen); // Toggle Tools dropdown visibility
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen); // Toggle Our Services dropdown visibility
  };

  const toggleMixedImagesDropdown = () => {
    setIsMixedImagesDropdownOpen(!isMixedImagesDropdownOpen); // Toggle Mixed Images dropdown visibility
  };

  const toggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen); // Toggle Cart dropdown visibility
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
          {isToolsDropdownOpen && (
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
          {isServicesDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-option">Book a Maali</div>
              <div className="dropdown-option">Plant Day Care</div>
              <div className="dropdown-option">Rent Plants</div>
            </div>
          )}
        </div>

        {/* Mixed Images Option */}
        <div className="dropdown-container">
          <span
            className="dropdown-selected"
            onClick={toggleMixedImagesDropdown}
          >
            Mixed Images
          </span>
          <div
            className="symbols-container"
            onClick={toggleMixedImagesDropdown}
          >
            <div className="symbol1"></div>
            <div className="symbol2"></div>
          </div>
          {isMixedImagesDropdownOpen && (
            <div className="mixed-images-dropdown">
              <div
                className="mixed-images"
                style={{
                  width: "172px",
                  height: "53px",
                  position: "relative",
                  opacity: 0,
                }}
              >
                <img
                  src="https://example.com/your-image-url-1" // Replace with the first image URL
                  alt="Mixed Image 1"
                  style={{
                    width: "10.05px",
                    height: "10.05px",
                    position: "absolute",
                    left: "155.02px",
                    border: "1.5px solid rgba(0, 0, 0, 1)",
                    opacity: 0,
                  }}
                />
                <img
                  src="https://example.com/your-image-url-2" // Replace with the second image URL
                  alt="Mixed Image 2"
                  style={{
                    width: "20.09px",
                    height: "10.05px",
                    position: "absolute",
                    left: "150px",
                    border: "1.5px solid rgba(0, 0, 0, 1)",
                    opacity: 0,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Option */}
        <div className="dropdown-container">
          <span className="dropdown-selected" onClick={toggleCartDropdown}>
            Cart
          </span>
          <div className="symbols-container" onClick={toggleCartDropdown}>
            <div className="symbol1"></div>
            <div className="symbol2"></div>
          </div>
          {isCartDropdownOpen && (
            <div className="cart-dropdown">
              <div
                style={{
                  width: "19px",
                  height: "19px",
                  position: "relative",
                  background: "rgba(243, 169, 57, 1)",
                  opacity: 0,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "17px",
                    position: "absolute",
                    left: "1286px",
                    fontFamily: "Poppins",
                    fontSize: "11px",
                    fontWeight: 300,
                    lineHeight: "16.5px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  3
                </span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b55d/7473/a2a7866f26acc6a4d6443c3dec9002d5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l3L41Evz6CZwbAInus3q~chHi-vJLxXlIbRnEMbQNYyQSmB-pgT8yztJdJkAPZbXL2BthButurZRKwfJVHviEW7wcd-hKSvJBQNM7slk8RdiLKqhwPH~F0gjlYHXh-aoFPnF8dkyBJEgEarNTfaQb9StA0rYs4liDZj7cDU05SZoPtX-o27ChlGtGwJyo1-4veJSdCrU8x2PCafZVIDmBiWaNgaXkSONHOJHtsDGVsTBCuRpRv3mExaG2qcP7D-WVjRfVDpvoIQWeCSabjcleK1pnCiKmKbHuC1dn5qrKiM0F9-EVN4qxOgw1C3PxRWTULlkvXrLTWuD8wFpCesNUg__"
                  alt="Cart Icon"
                  style={{
                    width: "28px",
                    height: "28px",
                    position: "absolute",
                    left: "1262px",
                    opacity: 0,
                  }}
                />
                <span
                  style={{
                    width: "29px",
                    height: "20px",
                    position: "absolute",
                    left: "1264px",
                    fontFamily: "Poppins",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: "19.5px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  CART
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
