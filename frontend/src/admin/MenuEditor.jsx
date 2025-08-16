import React, { useState, useEffect } from "react";
import "./MenuEditor.css";

const MenuEditor = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    featured: false,
    available: true,
  });

  // Fetch existing items on load
  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Error loading menu:", err));
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/menu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setMenuItems((prevItems) => [...prevItems, newItem]);
        setForm({
          name: "",
          description: "",
          price: "",
          category: "",
          featured: false,
          available: true,
        });
      })
      .catch((err) => console.error("Error adding menu item:", err));
  };

  return (
    <div className="menu-editor">
      <h2>Menu Editor</h2>

      <form onSubmit={handleSubmit} className="menu-form">
        <input name="name" placeholder="Dish Name" value={form.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <label>
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
          Featured
        </label>
        <label>
          <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
          Available
        </label>
        <button type="submit">Add Dish</button>
      </form>

      <div className="menu-preview">
        <h3>Current Menu Items</h3>
        <ul>
          {menuItems.map((item) => (
            <li key={item._id}>
              <strong>{item.name}</strong> - ₹{item.price} ({item.category}){" "}
              {item.featured && "🌟"} {item.available ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuEditor;
