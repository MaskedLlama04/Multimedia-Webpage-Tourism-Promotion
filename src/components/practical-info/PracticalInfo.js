import React from "react";
import "./PracticalInfo.css";

function PracticalInfo({ isOpen, onClose }) {
  // If the panel is closed, render nothing
  if (!isOpen) return null;

  return (
    <div className="practical-overlay" onClick={onClose}>
      <div className="practical-panel" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2 className="main-title">Practical Information</h2>

        {/* Official Website Section */}
        <div className="info-card website-card">
          <div className="card-icon">🌐</div>
          <h3>Official Website</h3>
          <p>Visit our official tourism portal for more information</p>
          <a
            href="https://www.guixols.cat/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-link"
          >
            www.guixols.cat
          </a>
        </div>

        {/* BY CAR */}
        <div className="info-card">
          <div className="card-icon">🚗</div>
          <h3>By Car</h3>
          <p>
            Take the <strong>AP-7 motorway</strong> until exit 9 (Lloret de Mar / Sant Feliu de
            Guíxols). The last 30 km are via the C-65 dual carriageway.
          </p>
          <div className="highlight-box">
            ✓ All motorways are toll-free
          </div>
          <div className="contact-info">
            <p>
              <strong>More info:</strong>{" "}
              <a
                href="https://www.autopistas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.autopistas.com
              </a>
            </p>
            <p><strong>Phone:</strong> 902 200 320</p>
          </div>
        </div>

        {/* BY BUS */}
        <div className="info-card">
          <div className="card-icon">🚌</div>
          <h3>By Bus (TEISA)</h3>
          <p className="route-info">
            <strong>Regular service to Girona:</strong><br />
            S'Agaró → Sant Feliu de Guíxols → Santa Cristina d'Aro →
            Llagostera → Cassà de la Selva → Llambilles → Quart →
            La Creueta → UdG → Girona
          </p>
          <div className="contact-info">
            <p><strong>Girona Bus Station:</strong> 972 212 319</p>
            <p><strong>Office:</strong> 972 204 868</p>
            <p>
              <strong>Timetables:</strong>{" "}
              <a
                href="https://www.teisa-bus.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.teisa-bus.com
              </a>
            </p>
          </div>
        </div>

        {/* MAP */}
        <div className="info-card map-card">
          <div className="card-icon">📍</div>
          <h3>How to Get There</h3>
          <p>Plan your route with Google Maps</p>
          <a
            href="https://www.google.com/maps/dir//Sant+Feliu+de+Gu%C3%ADxols+Girona/"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            🗺️ Open in Google Maps
          </a>
        </div>

        {/* Emergency Contacts */}
        <div className="info-card emergency-card">
          <div className="card-icon">🚨</div>
          <h3>Emergency Contacts</h3>
          <div className="emergency-grid">
            <div className="emergency-item">
              <strong>Emergency:</strong> 112
            </div>
            <div className="emergency-item">
              <strong>Police:</strong> 972 821 100
            </div>
            <div className="emergency-item">
              <strong>Medical Center:</strong> 972 325 700
            </div>
            <div className="emergency-item">
              <strong>Tourist Office:</strong> 972 820 051
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticalInfo;