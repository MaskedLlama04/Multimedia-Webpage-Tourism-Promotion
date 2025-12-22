import React from "react";
import "./PracticalInfo.css";

function PracticalInfo({ isOpen, onClose }) {
  // If the panel is closed, render nothing
  if (!isOpen) return null;

  return (
    <div className="practical-overlay">
      <div className="practical-panel">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Practical Information</h2>

        {/* ================= BY CAR ================= */}
        <h3>By car</h3>
        <p>
          Take the AP-7 motorway until exit 9 (Lloret de Mar / Sant Feliu de
          Guíxols). The last 30 km are via the C-65 dual carriageway.
        </p>
        <p>
          All motorways to reach Sant Feliu de Guíxols are toll-free.
        </p>
        <p>
          More information:{" "}
          <a
            href="https://www.autopistas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.autopistas.com
          </a>
        </p>
        <p>Phone: 902 200 320</p>

        {/* ================= BUS ================= */}
        <h3>By bus (TEISA)</h3>
        <p>Girona Bus Station: 972 212 319</p>
        <p>Office phone: 972 204 868</p>
        <p>
          Timetables and information:{" "}
          <a
            href="https://www.teisa-bus.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.teisa-bus.com
          </a>
        </p>

        <p>
          Regular bus service to Girona:
          <br />
          S’Agaró – Sant Feliu de Guíxols – Santa Cristina d’Aro –
          Llagostera – Cassà de la Selva – Llambilles – Quart –
          La Creueta – UdG – Girona.
        </p>

        {/* ================= MAP ================= */}
        <h3>How to get there</h3>
        <p>
          Plan your route using Google Maps:
        </p>
        <a
          href="https://www.google.com/maps/dir//Sant+Feliu+de+Gu%C3%ADxols+Girona/"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default PracticalInfo;
