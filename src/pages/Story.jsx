import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <div className="story-container">
      <h1 className="story-heading">Our Story</h1>
      <div className="story-content">
        <p>
          De Globe Café was born from a shared passion for coffee, creativity, and community. What started as a small coffee cart quickly grew into a cozy café where students, professionals, and artists gather to spark ideas and savor comfort food.
        </p>
        <p>
          Our aim is simple: <strong>serve joy in every cup</strong>. From handcrafted beverages to flavorful bites, every menu item reflects our love for taste and people.
        </p>
        <p>
          Step in, plug in, or just slow down — De Globe Café is your space to sip, sit, and stay a while.
        </p>
      </div>
    </div>
  );
};

export default Story;
