import React, { useState } from "react";
import "./Eat.css";
import foodData from "../../data/food.json";

function Eat() {
  const [selectedFood, setSelectedFood] = useState(null);

  // Function to get the image
  const getFoodImage = (imageName) => {
    return require(`../../assets/images/${imageName}`);
  };

  // Open modal with food details
  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedFood(null);
  };

  return (
    <section className="eat">
      {/* Page title */}
      <h1>The best menus</h1>
      
      {/* Description */}
      <p className="eat-description">
        Sant Feliu de Guíxols offers a rich Mediterranean gastronomy based on
        fresh seafood, traditional Catalan recipes, and modern cuisine.
        From seaside restaurants to family-run taverns, the town is a
        paradise for food lovers.
      </p>

      {/* Food image grid */}
      <div className="food-grid">
        {foodData.map((food) => (
          <div 
            key={food.id} 
            className="food-item"
            onClick={() => handleFoodClick(food)}
          >
            <img 
              src={getFoodImage(food.image)} 
              alt={food.name}
            />
            <div className="food-overlay">
              <span>Click for details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Food details modal */}
      {selectedFood && (
        <div className="food-modal" onClick={handleCloseModal}>
          <div className="food-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            
            <img 
              src={getFoodImage(selectedFood.image)} 
              alt={selectedFood.name}
              className="modal-image"
            />
            
            <div className="modal-text">
              <h2>{selectedFood.name}</h2>
              <p>{selectedFood.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Eat;