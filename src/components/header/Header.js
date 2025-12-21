import React from "react";
import "./Header.css";
import logo from "../../assets/logo.jpg";

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="Sant Feliu de Guíxols" className="logo" />
        <span className="subtitle">Empordà · Costa Brava</span>
      </div>

      <nav className="nav-menu">
        <a href="#welcome">Welcome</a>
        <a href="#beaches">Coves & Beaches</a>
        <a href="#activities">Activities</a>
        <a href="#sleep">Where to Sleep</a>
        <a href="#eat">Where to Eat</a>
        <a href="#agenda">Agenda</a>
        <a href="#info">Practical Info</a>
      </nav>
    </header>
  );
}

export default Header;
