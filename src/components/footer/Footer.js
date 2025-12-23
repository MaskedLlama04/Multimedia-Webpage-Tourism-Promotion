import React from "react";
import "./Footer.css";
import townHall from "../../assets/images/town-hall.png";
import udg from "../../assets/images/udg.png";

function Footer() {
  return (
    <footer className="footer">
      {/* Left image */}
      <img src={townHall} alt="Town Hall" className="footer-logo footer-logo-left" />

      <div className="footer-content">
        {/* Main footer text */}
        <p>© 2025 Sant Feliu de Guíxols</p>
        <p> Tourism Department (with the help of UdG) </p>
        {/* Secondary text */}
        <p className="footer-sub">
          Baix Empordà · Costa Brava · Catalonia
        </p>
      </div>

      {/* Right image */}
      <img src={udg} alt="UdG" className="footer-logo footer-logo-right" />
    </footer>
  );
}

export default Footer;