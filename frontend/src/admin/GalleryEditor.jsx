import React, { useState } from "react";
import "./GalleryEditor.css";

const GalleryEditor = () => {
  const [images, setImages] = useState([]);
  const [imageURL, setImageURL] = useState("");

  const handleAddImage = (e) => {
    e.preventDefault();
    if (imageURL.trim() !== "") {
      setImages([...images, imageURL]);
      setImageURL("");
    }
  };

  const handleDeleteImage = (index) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <div className="gallery-editor">
      <h2>Gallery Editor</h2>
      <form onSubmit={handleAddImage} className="gallery-form">
        <input
          type="url"
          placeholder="Paste image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
        <button type="submit">Add Image</button>
      </form>

      <div className="gallery-grid">
        {images.map((url, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={url} alt={`Gallery ${idx}`} />
            <button onClick={() => handleDeleteImage(idx)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryEditor;
