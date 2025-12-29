import React from "react";
import "./Presentation.css";

// Import the video file
import streetTour from "../../assets/videos/town-tour.mp4";

function Presentation() {
  return (
    <section className="presentation">
      {/* Grid container */}
      <div className="presentation-grid">

        {/* Left column will be some text */}
        <div className="presentation-text">
          <h2>Discover the town</h2>
          <p>
            Walking through Sant Feliu de Guíxols means discovering a town
            full of life, history, and Mediterranean essence. From its
            seafront promenade to the old town streets, every corner tells
            a story.
          </p>
          <p>
            In this short street tour, you will explore the atmosphere of
            the town, its coastal views, cultural spaces, and daily local
            life that make Sant Feliu de Guíxols a unique destination on
            the Costa Brava.
          </p>
        </div>

        {/* Right column its the video I made myself */}
        <div className="presentation-video">
          <video controls>
            <source src={streetTour} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}

export default Presentation;
