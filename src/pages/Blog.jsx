import React from "react";
import blogData from "../data/blogData";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-grid">
        {blogData.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.snippet}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
