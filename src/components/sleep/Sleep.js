import React, { useState, useEffect } from "react";
import "./Sleep.css";

// Hero image
import night from "../../assets/images/night.jpg";

// Import hotel data from data folder
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
      {/* Page title */}
      <h1 className="sleep-main-title">Choose your sleeping place</h1>

      {/* Hero image */}
      <img src={night} alt="Sant Feliu at night" className="sleep-hero" />

      {/* Introduction text */}
      <div className="sleep-intro">
        <p>
          A good night's rest is essential to fully enjoy your stay in Sant Feliu de Guíxols. 
          Choosing the right accommodation can make all the difference in your travel experience, 
          providing you with comfort, relaxation, and the perfect base to explore everything 
          this beautiful coastal town has to offer.
        </p>
        <p>
          Whether you prefer a luxurious beachfront hotel with spa services, a charming family-run 
          establishment in the heart of town, or a cozy hostal with a welcoming atmosphere, 
          Sant Feliu de Guíxols has excellent options to suit every preference and budget. 
          Below you'll find some of the best accommodations in the area, each offering unique 
          amenities and easy access to the town's beaches, restaurants, and attractions.
        </p>
      </div>

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