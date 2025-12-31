import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/town-hall-logo.png";

function Header({onPracticalClick}) {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="Sant Feliu de Guíxols" className="logo" />
        <span className="subtitle">Baix Empordà · Costa Brava</span>
      </div>

      <nav className="nav-menu">
        <Link to="/">Welcome</Link>
        <Link to="/beaches">Coves & Beaches</Link>
        <Link to="/adventure-selector">Plan Your Day</Link>
        <Link to="/sleep">Where to sleep</Link>
        <Link to="/eat">What to eat</Link>
        <Link to="/calendar">Calendar</Link>
        {/* Opens practical info tab */}
      <button 
        className="practical-btn" 
        onClick={onPracticalClick}
      >
        Practical Info
      </button>
      </nav>
    </header>
  );
}

export default Header;
