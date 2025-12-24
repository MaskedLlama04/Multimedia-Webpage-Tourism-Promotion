import React from "react";
import "./Beaches.css";
// Import images
import mainBeach from "../../assets/images/beach-main.jpg";
import beach1 from "../../assets/images/beach1.jpg";
import beach2 from "../../assets/images/beach2.jpg";
import beach3 from "../../assets/images/beach3.jpg";
import beach4 from "../../assets/images/beach4.jpg";
import beach5 from "../../assets/images/beach5.jpg";
import beach6 from "../../assets/images/beach6.jpg";

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
        <div className="beach-item">
          <img src={beach4} alt="Cala del Vigatà" />
          <h3>Cala del Vigatà</h3>
          <p>
            A charming hidden cove with turquoise waters and rocky surroundings,
            offering a tranquil escape for those seeking privacy and natural beauty.
          </p>
        </div>
        <div className="beach-item">
          <img src={beach5} alt="Cala Maset" />
          <h3>Cala Maset</h3>
          <p>
            A secluded gem nestled between cliffs, this small cove features
            crystal-clear water and is perfect for a peaceful day by the sea.
          </p>
        </div>
        <div className="beach-item">
          <img src={beach6} alt="Cala del Port Salvi" />
          <h3>Cala del Port Salvi</h3>
          <p>
            Located near the historic Port Salvi area, this scenic cove combines
            natural beauty with panoramic coastal views, ideal for relaxation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Beaches;