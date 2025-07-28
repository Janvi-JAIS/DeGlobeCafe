import React, { useState } from "react";
import galleryData from "../data/galleryData";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
            <img
              src={item.image}
              alt={item.caption}
              onClick={() => setSelectedImage(item.image)}
              className="clickable-img"
            />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
