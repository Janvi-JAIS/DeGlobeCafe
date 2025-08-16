import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Get in Touch with De Globe Café</h1>
        <p >We love hearing from our customers!<br/>
Whether you have a question, feedback, or simply want to say hello,<br/>
feel free to reach out.☕</p>
      </section>

       <section className="visit-section">
             <h2>Visit Us at Our Two Locations</h2>
             <p>Come, Be a Part of Our Story!<br/>
     Whether you’re here for a quick chai break or an evening of conversations over coffee,<br/>
     De Globe Café welcomes you with open arms.</p>
             <div className="visit-cards">
               <div className="visit-card">
                   <FontAwesomeIcon icon={faBuilding} className="location-icon" />
                 <h3>De Globe Café</h3>
                 <p>
     Hazratganj (Near LIC Office)<br/>
     Maqbara Rd, opposite LIC Office, Bank of Baroda,
     Hazratganj, Lucknow, Uttar Pradesh 226001</p>
               </div>
               <div className="visit-card">
                   <FontAwesomeIcon icon={faBuilding} className="location-icon" />
                 <h3>De Globe Café</h3>
                 <p>Hazratganj (Behind Prince Market)<br/>
     Chitrhar Building, behind Prince Market, Nawal Kishor Road,
     Hazratganj, Lucknow, Uttar Pradesh 226001</p>
               </div>
             </div>
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

   
  <section className="more-cafe">
  <div className="overlay">
    <div className="container">
      <h1>More Than Just a Café – It’s an <br /> Experience!</h1>
      <p>
        At De Globe Café, Every Sip, Every Bite, And Every Moment Is Crafted With Love.❤️<br />
        From Authentic Flavors To A Cozy Ambiance, Here’s Why Our Customers Keep Coming Back!
      </p>
      <button className="visit-btn">Visit us today</button>
    </div>
  </div>
</section>

    
    </div>
  );
};

export default Contact;
