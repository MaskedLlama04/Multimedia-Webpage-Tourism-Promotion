import React from "react";
import AdventureCard from "./AdventureCard";
import adventures from "../../../data/adventures.json";
import "./AdventureList.css";

function AdventureList({ onAdd, selectedAdventures }) {
  // Sort adventures by start time
  const sortedAdventures = [...adventures].sort((a, b) => 
    a.startTime.localeCompare(b.startTime)
  );

  // Check if an adventure has time conflict with selected ones
  const hasTimeConflict = (adventure) => {
    const adventureStart = timeToMinutes(adventure.startTime);
    const adventureEnd = timeToMinutes(adventure.endTime);

    return selectedAdventures.some((selected) => {
      const selectedStart = timeToMinutes(selected.startTime);
      const selectedEnd = timeToMinutes(selected.endTime);

      // Check if times overlap
      return (
        (adventureStart >= selectedStart && adventureStart < selectedEnd) ||
        (adventureEnd > selectedStart && adventureEnd <= selectedEnd) ||
        (adventureStart <= selectedStart && adventureEnd >= selectedEnd)
      );
    });
  };

  // Convert time string (HH:MM) to minutes since midnight
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  return (
    <div className="adventure-list-container">
      <h2 className="adventure-list-title">Available Adventures</h2>
      <p className="adventure-list-subtitle">
        Select activities for your perfect day (8:00h - 22:00h)
      </p>

      <div className="adventure-grid">
        {sortedAdventures.map((adventure) => (
          <AdventureCard
            key={adventure.id}
            adventure={adventure}
            onAdd={onAdd}
            isDisabled={hasTimeConflict(adventure)}
          />
        ))}
      </div>
    </div>
  );
}

export default AdventureList;