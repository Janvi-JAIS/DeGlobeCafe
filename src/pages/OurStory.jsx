import React, { useState, useRef, useEffect } from 'react';
import './OurStory.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

export default function OurStory() {
  const cravingsData = [
    { name: "Chicken Soup", desc: "A warm and hearty soup with shredded chicken and flavorful spices.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/chicken-soup-HIGH.jpg" },
    { name: "Chicken Momos Fry", desc: "Crispy fried momos stuffed with spicy chicken filling.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/chicken-momo-fry-HIGH-1024x683.jpeg" },
    { name: "Paneer Patties", desc: "A crunchy delight with soft, flavorful paneer stuffing.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/paneer_patties-high-1024x768.webp" },
    { name: "Veg Momo Steam", desc: "Soft steamed dumplings filled with fresh vegetables.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/veg_momo-steam-HIGH-1024x683.jpeg" },
    { name: "Grilled Chicken Burger", desc: "Juicy grilled chicken patty with sauces in a soft bun.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/grilled-chicken-burger-high-1024x683.jpeg" },
    { name: "Coffee", desc: "Freshly brewed coffee with a bold aroma.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/coffee.jpeg" }
  ];

  function getItemsPerViewByWidth(width) {
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerViewByWidth(window.innerWidth));
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
  const gapPx = 20;

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerViewByWidth(window.innerWidth);
      setItemsPerView(newItemsPerView);

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const computedCardWidth = Math.floor((containerWidth - gapPx * (newItemsPerView - 1)) / newItemsPerView);
        setCardWidth(computedCardWidth);
        const maxSlide = Math.max(0, cravingsData.length - newItemsPerView);
        setCurrentSlide(prev => Math.min(prev, maxSlide));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, cravingsData.length - itemsPerView);
  const nextSlide = () => setCurrentSlide(s => Math.min(s + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(s => Math.max(s - 1, 0));
  const translateX = -(currentSlide * (cardWidth + gapPx));

  return (
    <main className="ourstory">
      {/* About Card */}
      <section className="about-card container">
        <h2>About De Globe Café</h2>
        <p>Brewing Stories, One Cup at a Time ☕</p>
      </section>

      {/* From Adversity to Legacy */}
      <section className="legacy-section">
        <div className="container">
          <h2>From Adversity to Legacy: The De Globe Cafe Story</h2>
          <p>
            In 2019, De Globe Cafe opened its doors in the heart of Hazratganj, Lucknow, replacing a Mughal-theme restaurant with a fresh, global-inspired café experience. The response was heartwarming—guests loved our warm ambiance, handcrafted beverages, and thoughtfully curated menu. The future looked bright.<br/><br/>
            But then, the Covid-19 pandemic changed everything. India went into lockdown. Streets were empty, businesses shut down overnight, and uncertainty loomed. Many cafes and restaurants were forced to close permanently, but we made a decision—we would not let our team struggle.<br/><br/>

But then, the Covid-19 pandemic changed everything. India went into lockdown. Streets were empty, businesses shut down overnight, and uncertainty loomed. Many cafes and restaurants were forced to close permanently, but we made a decision—we would not let our team struggle.<br/><br/>

With no revenue coming in, we still ensured timely rent payments and full salaries for our staff, because they were our family. It was tough. It was uncertain. But we believed in our people and our passion. When the world reopened, our community stood by us. Slowly, but steadily, we rebuilt what we had started.<br/><br/>

Today, De Globe Cafe is not just a café—it’s a story of resilience, hope, and passion. Our coffee and tea are now among the most loved in Hazratganj, a testament to the journey we undertook. Every sip you take here is brewed with the struggles, dreams, and unwavering spirit that kept us going.

Welcome to De Globe Cafe—a place where every cup tells a story.
          </p>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="special-section container">
        <h2>What Makes Us Special?🌟</h2>
        <div>
          <h3>Signature Brews</h3>
          <p>From our famous Chai Kulhad to perfectly brewed Cold Coffee...</p>
          <h3>Unmatched Quality</h3>
          <p>We use premium ingredients...</p>
          <h3>A Cozy Escape</h3>
          <p>Whether it’s a quick chai break or hours of conversation...</p>
          <h3>Customer First Approach</h3>
          <p>Your experience matters...</p>
        </div>
      </section>

      {/* Menu Scroll Section */}
      <section className="cravings-section">
        <h1 className="section-title">Cravings? We’ve Got You Covered!</h1>
        <p className="section-subtitle">
          From sizzling burgers to creamy cold coffee, explore the top picks from our kitchen.
        </p>

        <div className="carousel-wrapper">
          <button className="arrow-btn left" onClick={prevSlide} disabled={currentSlide === 0}>❮</button>

          <div className="carousel-container" ref={containerRef}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: "transform 420ms cubic-bezier(.22,.9,.36,1)",
              }}
            >
              {cravingsData.map((item, index) => (
                <div
                  className="cravings-card"
                  key={index}
                  style={{ minWidth: cardWidth ? `${cardWidth}px` : undefined }}
                >
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow-btn right" onClick={nextSlide} disabled={currentSlide >= maxSlide}>❯</button>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-section container">
        <h2>Visit Us at Our Two Locations</h2>
        <p>Come, Be a Part of Our Story!<br/><br/>
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

      {/* More Than Just a Café */}
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

{/* 
      Footer
      <footer className="footer container">
        <div className="footer-left">
          <h4>Connect With Us</h4>
          <p>@deglobecafe</p>
        </div>
        <div className="footer-right">
          <p>More Than Just a Café – It’s an Experience! ❤️</p>
        </div>
      </footer> */}
    </main>
  );
}
