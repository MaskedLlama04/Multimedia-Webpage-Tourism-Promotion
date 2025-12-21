import React from "react";
import "./Adventure.css";

function Adventure() {
  return (
    <section className="adventure">
      {/* Section title */}
      <h2>Make your own adventure</h2>

      {/* Short description */}
      <p>
        Choose the activities you like the most and create your own
        personalized experience in Sant Feliu de Guíxols.
      </p>

      {/* Button that will later navigate to the interaction/cart page */}
      <button className="adventure-btn">
        Start your adventure
      </button>
    </section>
  );
}

export default Adventure;
