import React from "react";
import "./Eat.css";

// Import food images
import food1 from "../../assets/images/food1.jpg";
import food2 from "../../assets/images/food2.jpg";
import food3 from "../../assets/images/food3.jpg";
import food4 from "../../assets/images/food4.jpg";
import food5 from "../../assets/images/food5.jpg";
import food6 from "../../assets/images/food6.jpg";
import food7 from "../../assets/images/food7.jpg";
import food8 from "../../assets/images/food8.jpg";

function Eat() {
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
        <img src={food1} alt="Local food" />
        <img src={food2} alt="Seafood dish" />
        <img src={food3} alt="Mediterranean cuisine" />
        <img src={food4} alt="Traditional menu" />
        <img src={food5} alt="Rice dish" />
        <img src={food6} alt="Fish menu" />
        <img src={food7} alt="Dessert" />
        <img src={food8} alt="Local gastronomy" />
      </div>
    </section>
  );
}

export default Eat;
