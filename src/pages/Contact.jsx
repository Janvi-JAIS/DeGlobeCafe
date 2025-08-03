import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-wrapper">
        <form className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Brew Street, Lucknow, UP</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@deglobecafe.com</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="De Globe Café Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.428738697094!2d80.9431336753249!3d26.852244876668996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a29a3424a3%3A0x2f26e332d0bdc87d!2sLucknow%20Cafe!5e0!3m2!1sen!2sin!4v1693141110298!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
