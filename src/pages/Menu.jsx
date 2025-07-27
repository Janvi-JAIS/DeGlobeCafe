import React from "react";
import menuData from "../data/menuData";
import "./Menu.css"; // ✅ this is correct

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Our Menu</h1>
      <div className="menu-grid">
        {menuData.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <h2 className="menu-title">{item.name}</h2>
            <p className="menu-description">{item.description}</p>
            <p className="menu-price">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
