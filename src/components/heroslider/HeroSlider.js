import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

// Import slider images
import img1 from "../../assets/images/sant-pol.jpg";
import img2 from "../../assets/images/beach.jpg";
import img3 from "../../assets/images/port.jpg";
import img4 from "../../assets/images/seafront.jpg"

// Slider content array
const slides = [
  {
    image: img1,
    title: "Sant Pol Beach",
    subtitle: "Tradition and style by the sea"
  },
  {
    image: img2,
    title: "Hidden Coves",
    subtitle: "Discover Costa Brava"
  },
  {
    image: img3,
    title: "The Port",
    subtitle: "Mediterranean charm"
  },
  {
    image: img4,
    title: "Seafront Walking Path",
    subtitle: "Feel the fresh air of the sea"
  }
  
];

function HeroSlider() {
  // State that controls the current slide
  const [current, setCurrent] = useState(0);

  // Automatically change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    // Clean interval when component unmounts
    return () => clearInterval(interval);
  }, [current]);

  // Go to next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      {/* Text overlay */}
      <div className="overlay">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].subtitle}</p>
      </div>

      {/* Navigation arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
}

export default HeroSlider;
