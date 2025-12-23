import React, { useState, useEffect } from "react";
import "./Sleep.css";

// Hero image
import night from "../../assets/images/night.jpg";

// Import hotel data from data folder (so its basicllay easier to work with the data)
import hotelsData from "../../data/hotels.json";

// Import hotel images
import h1 from "../../assets/images/hotel1.jpg";
import h2 from "../../assets/images/hotel2.jpg";
import h3 from "../../assets/images/hotel3.jpg";
import h4 from "../../assets/images/hotel4.jpg";
import h5 from "../../assets/images/hotel5.jpg";
import h6 from "../../assets/images/hotel6.jpg";

// Map image filenames to imported images
const imageMap = {
  "hotel1.jpg": h1,
  "hotel2.jpg": h2,
  "hotel3.jpg": h3,
  "hotel4.jpg": h4,
  "hotel5.jpg": h5,
  "hotel6.jpg": h6
};

function Sleep() {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    // Load hotels and map images
    const hotelsWithImages = hotelsData.map(hotel => ({
      ...hotel,
      imageUrl: imageMap[hotel.image]
    }));
    setHotels(hotelsWithImages);
  }, []);

  return (
    <section className="sleep">
      {/* Hero image */}
      <img src={night} alt="Sant Feliu at night" className="sleep-hero" />

      {/* Hotel info panel (only appears when one is selected) */}
      {selectedHotel && (
        <div className="hotel-info">
          <img
            src={selectedHotel.imageUrl}
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
            src={hotel.imageUrl}
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