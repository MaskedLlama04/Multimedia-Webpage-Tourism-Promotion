import React from "react";
import "./Activities.css";

// Import activity images
import monastery from "../../assets/images/building.jpg";
import casino from "../../assets/images/casino.jpg";
import festival from "../../assets/images/festival.jpg";

// Import audio explanation
import explanationAudio from "../../assets/audio/ocean_waves.mp3";

function Activities() {

  // Function to play the audio explanation
  const playAudio = () => {
    const audio = new Audio(explanationAudio);
    audio.play();
  };

  return (
    <section className="activities" id="activities">
      {/* Section title */}
      <h2>What can you do here</h2>

      {/* ================= ACTIVITY 1 ================= */}
      <div className="activity">
        <div className="activity-text">

          {/* Title + audio button */}
          <div className="activity-title">
            <h3>1. Monastery</h3>
            <button
              className="audio-btn"
              onClick={playAudio}
              aria-label="Listen to explanation"
            >
              🔊 Listen
            </button>
          </div>

          <p>
            The Benedictine monastery complex is the most important heritage
            site in the city. It preserves elements such as the Romanesque
            Porta Ferrada (10th century), which has become a symbol of
            Sant Feliu de Guíxols.
          </p>
          <p>
            The Church of Mare de Déu dels Àngels and the Corn and Fum towers
            are also part of the monastic complex, which will soon host
            the Carmen Thyssen – Bornemisza Art Centre.
          </p>
        </div>

        <div className="activity-image">
          <img src={monastery} alt="Monastery of Sant Feliu de Guíxols" />
        </div>
      </div>

      {/* ================= ACTIVITY 2 ================= */}
      <div className="activity reverse">
        <div className="activity-image">
          <img src={casino} alt="Casino La Constància" />
        </div>

        <div className="activity-text">
          <div className="activity-title">
            <h3>2. Casino La Constància</h3>
            <button className="audio-btn" onClick={playAudio}>
              🔊 Listen
            </button>
          </div>

          <p>
            Casino La Constància is one of the most emblematic modernist
            buildings in Sant Feliu de Guíxols. Built at the end of the
            19th century, it reflects the cultural and social life of the
            city during its golden age.
          </p>
          <p>
            Today, visitors can admire its architecture, attend cultural
            events, exhibitions, and concerts, or simply enjoy the lively
            atmosphere of one of the city's most historic meeting points.
          </p>
        </div>
      </div>

      {/* ================= ACTIVITY 3 ================= */}
      <div className="activity">
        <div className="activity-text">
          <div className="activity-title">
            <h3>3. Guíxols Arena</h3>
            <button className="audio-btn" onClick={playAudio}>
              🔊 Listen
            </button>
          </div>

          <p>
            Guíxols Arena is a modern open-air venue that hosts some of the
            most important events and festivals in the area, especially
            during the summer months.
          </p>
          <p>
            Here you can enjoy live music concerts, cultural festivals,
            gastronomic fairs, and large community events, all just a few
            steps away from the sea in a vibrant Mediterranean atmosphere.
          </p>
        </div>

        <div className="activity-image">
          <img src={festival} alt="Guíxols Arena festival" />
        </div>
      </div>
    </section>
  );
}

export default Activities;
