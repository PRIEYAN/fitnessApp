import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo">
          <span>Fit</span> Belive
        </NavLink>
      </div>

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
            Home
          </a>
        </li>
        <li>
          <a href="#equ" onClick={(e) => { e.preventDefault(); scrollToSection('equipment'); }}>
            Category
          </a>
        </li>
        <li>
          <a href="#membership" onClick={(e) => { e.preventDefault(); scrollToSection('membership'); }}>
            Membership
          </a>
        </li>
        <li>
          <a href="#trainer" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>
            Trainer
          </a>
        </li>
        <li>
          <a href="#aboutus" onClick={(e) => { e.preventDefault(); scrollToSection('aboutus'); }}>
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
