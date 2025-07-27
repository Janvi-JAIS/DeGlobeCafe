import React from "react";
import "./Gallery.css";

const images = [
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/image3.jpg",
  // Replace with your actual image paths
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
