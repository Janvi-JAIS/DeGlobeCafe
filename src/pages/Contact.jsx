import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get in Touch</h1>
      <div className="contact-box">
        <form>
          <label className="contact-label">Name</label>
          <input type="text" className="contact-input" placeholder="Your Name" />

          <label className="contact-label">Email</label>
          <input type="email" className="contact-input" placeholder="you@example.com" />

          <label className="contact-label">Message</label>
          <textarea className="contact-input" rows="4" placeholder="Your message..." />

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
