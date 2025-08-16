import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1 className="hero-title">Get in Touch with De Globe Café</h1>
        <p className="hero-content">We love hearing from our customers!
Whether you have a question, feedback, or simply want to say hello,
feel free to reach out.☕</p>
      </div>

      {/* Visit Us Section */}
      <section className="visit-us-section">
        <h2>Visit Us at Our Two Locations</h2>
        <p className="tagline">Come, Be a Part of Our Story!</p>
        <p className="description">
          Whether you’re here for a quick chai break or an evening of conversations over coffee,
          De Globe Café welcomes you with open arms.
        </p>
        <p className="hours">
          <strong>Opening Hours:</strong> Monday – Sunday: 10:00 AM – 11:00 PM
        </p>

        <div className="location">
          <h3>De Globe Café - Hazratganj (Near LIC Office)</h3>
          <p>
            Maqbara Rd, opposite LIC Office, Bank of Baroda,
            Hazratganj, Lucknow, Uttar Pradesh 226001
          </p>
        </div>

        <div className="location">
          <h3>De Globe Café - Hazratganj (Behind Prince Market)</h3>
          <p>
            Chitrhar Building, behind Prince Market, Nawal Kishor Road,
            Hazratganj, Lucknow, Uttar Pradesh 226001
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="contact-gallery">
        <div className="gallery-item"><img src="https://via.placeholder.com/400x300" alt="Gallery 1" /></div>
        <div className="gallery-item"><img src="https://via.placeholder.com/400x300" alt="Gallery 2" /></div>
        <div className="gallery-item"><img src="https://via.placeholder.com/400x300" alt="Gallery 3" /></div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-item">
          <p><strong>Q:</strong> Do you offer home delivery?</p>
        </div>
        <div className="faq-item">
          <p><strong>Q:</strong> Do you take bulk orders?</p>
        </div>
      </section>

      {/* Social Media Connect */}
      <section className="social-media-section">
        <h2>Connect With Us on Social Media</h2>
        <p>Stay updated with our latest offers, events, and new additions to the menu!</p>
        <p><strong>Follow Us Now</strong></p>
        <p>@deglobecafe</p>
        <p>@deglobecafe</p>
        <p>@deglobecafe</p>
      </section>

      {/* Closing Message */}
      <section className="closing-section">
        <h2>More Than Just a Café – It’s an Experience!</h2>
        <p>
          At De Globe Café, every sip, every bite, and every moment is crafted with love ❤️
          From authentic flavors to a cozy ambiance, here’s why our customers keep coming back!
        </p>
        <p><strong>Visit us today</strong></p>
      </section>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="De Globe Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5532585222214!2d80.94364737435988!3d26.853861062720174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd1b95555555%3A0x7a9f432b44f6d8f4!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
