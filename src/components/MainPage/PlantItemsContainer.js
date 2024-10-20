import React, { useState } from "react";
import PlantItemsList from "./PlantItemsList"; // Ensure you import the PlantItemsList component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import ProductDetailsSection from "./ProductDetailsSection"; // Import the ProductDetailsSection

const PlantItemsContainer = () => {
  // Sample data for the three different plant items
  const plantsData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
      iconUrl: <FontAwesomeIcon icon={faHeart} />, // Add heart icon
      title: "Monsterra",
      description: "Indoor Plant, Low maintenance",
      price: 359,
      discountedPrice: 299,
      rating: 4.9,
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
      iconUrl: "", // No icon for this plant
      title: "Fiddle Leaf Fig",
      description: "Requires bright, indirect sunlight",
      price: 499,
      discountedPrice: 399,
      rating: 4.8,
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
      iconUrl: "", // No icon for this plant
      title: "Snake Plant",
      description: "Great for beginners",
      price: 299,
      discountedPrice: 249,
      rating: 4.7,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px", // Use gap to create consistent spacing between columns
          marginLeft: "20px", // Left margin as per your preference
        }}
      >
        {/* Plant Items Column */}
        {plantsData.map((plant, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "20px" }}>
              <PlantItemsList {...plant} />
              <button onClick={() => handleViewProduct(plant)}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Section */}
      <ProductDetailsSection product={selectedProduct} />
    </div>
  );
};

export default PlantItemsContainer;