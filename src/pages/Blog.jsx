import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "Why Cold Coffee is the Ultimate Summer Drink",
    date: "July 2025",
    content: "Discover the refreshing joy of hazelnut cold coffee...",
  },
  {
    title: "The Secret to Perfect Masala Chai",
    date: "June 2025",
    content: "Blending spices and milk the Indian way...",
  },
  {
    title: "Café Culture in the Digital Age",
    date: "May 2025",
    content: "How cafés like De Globe are becoming creative hubs...",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-heading">Blog</h1>
      {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <div className="blog-title">{post.title}</div>
          <div className="blog-date">{post.date}</div>
          <div className="blog-content">{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
