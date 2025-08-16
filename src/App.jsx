import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Story from "./pages/Story";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/ProtectedRoute";
import OurStory from "./pages/OurStory";


import Dashboard from "./admin/Dashboard";
import MenuEditor from "./admin/MenuEditor";
import BlogEditor from "./admin/BlogEditor";
import GalleryEditor from "./admin/GalleryEditor";
import Inquiries from "./admin/Inquiries";

const App = () => {
  return (
    <>
      
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home />} />
       
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
       

        <Route path="/admin" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
  <Route path="/admin/menu" element={<ProtectedRoute><MenuEditor /></ProtectedRoute>} />
  <Route path="/admin/blog" element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
  <Route path="/admin/gallery" element={<ProtectedRoute><GalleryEditor /></ProtectedRoute>} />
  <Route path="/admin/inquiries" element={<ProtectedRoute><Inquiries /></ProtectedRoute>} />
        
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
