import React from "react";
import "./Intro.css";

// Import main image
import logoImage from "../../assets/images/logo.jpg";

function Intro() {
  return (
    <section className="intro">
      {/* Grid container */}
      <div className="intro-grid">
        
        {/* Left column: image */}
        <div className="intro-image">
          <img
            src={logoImage}
            alt="Sant Feliu de Guíxols"
          />
        </div>

        {/* Right column: text */}
        <div className="intro-text">
          <h2>Sant Feliu de Guíxols</h2>
          <p>
            Sant Feliu de Guíxols is a charming coastal town located in the
            heart of the Costa Brava. With its rich history, beautiful
            beaches, cultural heritage, and Mediterranean atmosphere,
            it offers the perfect balance between tradition and modern life.
          </p>
          <p>
            Whether you are looking for relaxation by the sea, cultural
            experiences, or vibrant local events, Sant Feliu de Guíxols
            is the ideal destination for an unforgettable adventure.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Intro;
