import React from "react";
import "./AdventureCard.css";

function AdventureCard({ adventure, onAdd, isDisabled }) {
  return (
    <div className={`adventure-card ${isDisabled ? 'disabled' : ''}`}>
      <img 
        src={require(`../../../assets/images/${adventure.image}`)} 
        alt={adventure.name}
        className="adventure-image"
      />
      
      <div className="adventure-content">
        <h3>{adventure.name}</h3>
        <p className="adventure-description">{adventure.description}</p>
        <p className="adventure-time">
          <strong>{adventure.startTime} - {adventure.endTime}</strong>
        </p>
        
        <button 
          onClick={() => onAdd(adventure)}
          disabled={isDisabled}
          className="add-button"
        >
          {isDisabled ? 'Time Conflict' : 'Add to Schedule'}
        </button>
      </div>
    </div>
  );
}

export default AdventureCard;