import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">De Globe Café</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/menu" className="nav-link">Menu</NavLink></li>
        <li><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
        <li><NavLink to="/story" className="nav-link">Our Story</NavLink></li>
        <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
