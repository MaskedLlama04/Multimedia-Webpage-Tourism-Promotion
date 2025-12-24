import React from "react";
import { useNavigate } from "react-router-dom";
import "./Adventure.css";

function Adventure() {
  const navigate = useNavigate();

  const handleStartAdventure = () => {
    navigate("/adventure-selector");
  };

  return (
    <section className="adventure">
      {/* Section title */}
      <h2>Make your own adventure</h2>

      {/* Short description */}
      <p>
        Choose the activities you like the most and create your own
        personalized experience in Sant Feliu de Guíxols.
      </p>

      {/* Button that navigates to the adventure selector page */}
      <button className="adventure-btn" onClick={handleStartAdventure}>
        Start your adventure
      </button>
    </section>
  );
}

export default Adventure;