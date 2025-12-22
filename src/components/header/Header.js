import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.jpg";

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
        <a href="/#activities">Activities</a>
        <a href="#sleep">Where to Sleep</a>
        <Link to="/eat">Where to eat</Link>
        <a href="#agenda">Agenda</a>
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
