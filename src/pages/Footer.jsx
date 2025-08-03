import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>De Globe Café</h3>
        <p>Brewing happiness one cup at a time ☕</p>
        <p>© {new Date().getFullYear()} De Globe Café. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
