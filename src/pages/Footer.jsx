import React from "react";
import "./Footer.css";
// import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
// import zomatoLogo from "/assets/zomato.png"; // replace with actual path


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>De Globe Café</h3>
          <p>A place where every sip tells a story!</p>
          <p>Established in 2019 | Loved by Lucknowies</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reels">Reels & Highlights</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Branches</h4>
          <p><strong>Hazratganj Branch 1:</strong><br />Maqbara Rd, Opposite LIC Office, Bank of Baroda, Hazratganj.</p>
          <p><strong>Hazratganj Branch 2:</strong><br />Chitrhar Building, Behind Prince Market, Nawal Kishor Road, Hazratganj.</p>
        </div>

        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="footer-icons">
            <a href="#">
    <img src="/assets/zomato.png" alt="Zomato" />
  </a>

  <a href="tel:+911234567890" aria-label="Phone">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24">
      <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2 12.4 12.4 0 004 0.6 1 1 0 011 1v3.6a1 1 0 01-1 1A17.9 17.9 0 012 6a1 1 0 011-1h3.6a1 1 0 011 1 12.4 12.4 0 00.6 4 1 1 0 01-.2 1.1l-2.4 2.7z" />
    </svg>
  </a>

  <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24">
      <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.25a1.25 1.25 0 11-2.5.001 1.25 1.25 0 012.5-.001z" />
    </svg>
  </a>

          </div>
          <p>Opening Hours:<br />Mon-Sun: 9:00 AM – 11:00 PM</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved to De Globe Café | “Crafted with love, brewed to perfection!” — 🤍 Team BlackSheild ( A Part Of NirvoTech )</p>
      </div>
    </footer>
  );
}
