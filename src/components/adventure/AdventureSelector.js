import React, { useState } from "react";
import AdventureList from "./cart/AdventureList";
import Cart from "./cart/Cart";
import "./AdventureSelector.css";

function AdventureSelector() {
  const [selectedAdventures, setSelectedAdventures] = useState([]);

  // Add adventure to cart
  const handleAddAdventure = (adventure) => {
    // Check if already in cart
    if (!selectedAdventures.find((a) => a.id === adventure.id)) {
      setSelectedAdventures([...selectedAdventures, adventure]);
    }
  };

  // Remove adventure from cart
  const handleRemoveAdventure = (id) => {
    setSelectedAdventures(selectedAdventures.filter((a) => a.id !== id));
  };

  return (
    <div className="adventure-selector-page">
      <div className="adventure-selector-container">
        {/* Left side: Adventure list */}
        <div className="adventure-list-section">
          <AdventureList
            onAdd={handleAddAdventure}
            selectedAdventures={selectedAdventures}
          />
        </div>

        {/* Right side: Cart */}
        <div className="cart-section">
          <Cart cart={selectedAdventures} onRemove={handleRemoveAdventure} />
        </div>
      </div>
    </div>
  );
}

export default AdventureSelector;