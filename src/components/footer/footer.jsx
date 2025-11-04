import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1 className="footer-logo">FIT BELIVE</h1>
          <p className="footer-description">
            At FitBeLive, we believe fitness is more than just exercise — it's a
            lifestyle. Our mission is to empower.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/category">Category</a></li>
            <li><a href="/membership">MemberShip</a></li>
            <li><a href="/trainer">Trainer</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <i className="fas fa-phone"></i>
              +91 9876543210
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              info@fitbelive.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              123 Sports Complex, Green Avenue,<br />
              Mumbai, Maharashtra 400001
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;