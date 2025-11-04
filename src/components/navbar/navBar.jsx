import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="logo">
          <span>Fit</span> Belive
        </NavLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" onClick={() => setIsMenuOpen(false)}>
            Category
          </NavLink>
        </li>
        <li>
          <NavLink to="/membership" onClick={() => setIsMenuOpen(false)}>
            Membership
          </NavLink>
        </li>
        <li>
          <NavLink to="/trainer" onClick={() => setIsMenuOpen(false)}>
            Trainer
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" onClick={() => setIsMenuOpen(false)}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
