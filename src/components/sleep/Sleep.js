import React, { useState } from "react";
import "./Sleep.css";

// Hero image
import night from "../../assets/images/night.jpg";

// Hotel images
import h1 from "../../assets/images/hotel1.jpg";
import h2 from "../../assets/images/hotel2.jpg";
import h3 from "../../assets/images/hotel3.jpg";
import h4 from "../../assets/images/hotel4.jpg";
import h5 from "../../assets/images/hotel5.jpg";
import h6 from "../../assets/images/hotel6.jpg";

// Hotel data
const hotels = [
  {
    id: 1,
    name: "Hotel Sant Pol",
    image: h1,
    stars: 4,
    timetable: "24h reception",
    location: "Sant Pol beach",
    description:
      "A charming hotel located right in front of the sea, ideal for relaxing stays with beautiful views."
  },
  {
    id: 2,
    name: "Hotel Eden Roc",
    image: h2,
    stars: 4,
    timetable: "Check-in from 14:00",
    location: "Punta Port Salvi",
    description:
      "Modern hotel surrounded by nature, featuring pools, spa services, and direct sea access."
  },
  {
    id: 3,
    name: "Hotel Montjoi",
    image: h3,
    stars: 3,
    timetable: "Check-in from 13:00",
    location: "Town center",
    description:
      "Comfortable and affordable hotel close to shops, restaurants, and cultural attractions."
  },
  {
    id: 4,
    name: "Hotel Barcarola",
    image: h4,
    stars: 3,
    timetable: "Reception until 22:00",
    location: "Near Sant Pol",
    description:
      "Family-friendly hotel with a calm atmosphere and easy access to the beach."
  },
  {
    id: 5,
    name: "Hotel Hostal del Sol",
    image: h5,
    stars: 2,
    timetable: "Reception until 21:00",
    location: "Residential area",
    description:
      "A cozy hostal offering simple rooms and a welcoming, home-like environment."
  },
  {
    id: 6,
    name: "Hotel Elke Spa",
    image: h6,
    stars: 4,
    timetable: "24h reception",
    location: "Seafront promenade",
    description:
      "Elegant hotel with spa facilities, perfect for luxury and wellness experiences."
  }
];

function Sleep() {
  // State to store the selected hotel
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <section className="sleep">
      {/* Hero image */}
      <img src={night} alt="Sant Feliu at night" className="sleep-hero" />

      {/* Hotel info panel (only appears when one is selected) */}
      {selectedHotel && (
        <div className="hotel-info">
          <img
            src={selectedHotel.image}
            alt={selectedHotel.name}
          />

          <div className="hotel-text">
            <h2>{selectedHotel.name}</h2>
            <p><strong>Stars:</strong> {"⭐".repeat(selectedHotel.stars)}</p>
            <p><strong>Location:</strong> {selectedHotel.location}</p>
            <p><strong>Timetable:</strong> {selectedHotel.timetable}</p>
            <p>{selectedHotel.description}</p>
          </div>
        </div>
      )}

      {/* Hotel selection grid */}
      <h2 className="sleep-title">Choose your accommodation (click on them for more details)</h2>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <img
            key={hotel.id}
            src={hotel.image}
            alt={hotel.name}
            onClick={() => setSelectedHotel(hotel)}
            className="hotel-thumb"
          />
        ))}
      </div>
    </section>
  );
}

export default Sleep;
