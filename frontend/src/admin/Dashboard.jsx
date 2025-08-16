import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/menu">Manage Menu</Link></li>
        <li><Link to="/admin/blog">Manage Blogs</Link></li>
        <li><Link to="/admin/gallery">Manage Gallery</Link></li>
        <li><Link to="/admin/inquiries">View Inquiries</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
