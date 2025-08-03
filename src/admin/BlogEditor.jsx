import React, { useState } from "react";
import "./BlogEditor.css";

const BlogEditor = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    publishDate: "",
    featured: false,
    status: "draft",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs([...blogs, { ...form }]);
    setForm({
      title: "",
      content: "",
      category: "",
      tags: "",
      publishDate: "",
      featured: false,
      status: "draft",
    });
  };

  return (
    <div className="blog-editor">
      <h2>Blog Editor</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} rows="5" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
        <input name="tags" placeholder="Tags (comma separated)" value={form.tags} onChange={handleChange} />
        <input type="date" name="publishDate" value={form.publishDate} onChange={handleChange} />
        <label>
          <input type="checkbox" name="featured" checked={form.featured} onChange={handleChange} />
          Featured
        </label>
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button type="submit">Add Blog</button>
      </form>

      <div className="blog-preview">
        <h3>Current Blog Posts</h3>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <strong>{blog.title}</strong> ({blog.category}) - {blog.status}
              {blog.featured && " 🌟"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogEditor;
