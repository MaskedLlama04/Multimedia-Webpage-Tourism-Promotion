import React from "react";
import "./Beaches.css";

// Import images
import mainBeach from "../../assets/images/beach-main.jpg";
import beach1 from "../../assets/images/beach1.jpg";
import beach2 from "../../assets/images/beach2.jpg";
import beach3 from "../../assets/images/beach3.jpg";

function Beaches() {
  return (
    <section className="beaches">
      {/* Page title */}
      <h1>Coves & Beaches</h1>

      {/* Main image */}
      <img
        src={mainBeach}
        alt="Sant Feliu de Guíxols beach"
        className="main-beach"
      />

      {/* Main description */}
      <p className="beach-description">
        Sant Feliu de Guíxols is surrounded by some of the most beautiful
        beaches and coves of the Costa Brava. Crystal-clear waters,
        golden sand, and hidden natural corners make this coastline
        perfect for swimming, snorkeling, or simply relaxing by the sea.
      </p>

      {/* Individual beaches */}
      <div className="beach-list">
        <div className="beach-item">
          <img src={beach1} alt="Sant Pol Beach" />
          <h3>Sant Pol Beach</h3>
          <p>
            One of the most iconic beaches in the area, known for its
            calm waters, fine sand, and traditional seaside houses.
          </p>
        </div>

        <div className="beach-item">
          <img src={beach2} alt="Cala Ametller" />
          <h3>Cala Ametller</h3>
          <p>
            A small and peaceful cove surrounded by nature, ideal for
            snorkeling and enjoying the Mediterranean landscape.
          </p>
        </div>

        <div className="beach-item">
          <img src={beach3} alt="Cala Jonca" />
          <h3>Cala Jonca</h3>
          <p>
            A rocky cove close to the town center, perfect for swimming
            and experiencing a more natural seaside environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Beaches;
