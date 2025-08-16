import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
export default function Home() {
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
    <div className="home-page">

    {/* Hero Section */}
<section className="hero">
  <div className="hero-container">
    {/* Left text */}
    <div className="hero-text">
      <h4>De Globe Cafe</h4>
      <h1>
        Handmade <br/> Coffee with<br/> Amazing <br/>Vibes
      </h1>
      <p>
       Handmade coffee, brewed with passion, creates an unmatched experience. Rich aromas, smooth flavors, and cozy vibes make every sip special, turning simple moments into unforgettable memories. Perfect coffee, perfect ambiance, pure bliss!
      </p>
      <a href="/menu" className="btn-primary">Explore Our Menu</a>
    </div>

    {/* Right image */}
    <div className="hero-image">
      <img 
        src="https://deglobecafe.in/wp-content/uploads/2025/03/Coff.png" 
        alt="Coffee cup"
      />
    </div>
  </div>
</section>


      {/* Quote Section */}
      <section className="quote">
          "Coffee isn’t just a drink, it’s a hug in a mug,<br /> a spark of inspiration, and the fuel for great <br /> ideas."
      
      </section>

<section className="about-us">
  <div className="about-container">
    <div className="about-image">
      <img 
        src="https://deglobecafe.in/wp-content/uploads/2025/04/about-image.jpg" 
        alt="De Globe Cafe" 
      />
    </div>
    <div className="about-text">
      <h3>About Us</h3>
      <h1>Explore Tale of <br /> Resilience & Passion</h1>
      <p>
        De Globe Cafe was established in 2019, bringing a fresh, global experience 
        to Hazratganj, Lucknow, in place of a Mughal-theme restaurant. Just as it 
        started gaining momentum, the Covid-19 pandemic shook the world. The lockdown 
        forced many businesses to shut down, but we refused to give up. Prioritizing 
        our team’s well-being, we ensured timely rent payments and full salaries, even 
        in uncertain times. Through unwavering determination and love for what we do, 
        we survived—and today, our coffee and tea are among the most loved in Hazratganj.
      </p>
      <ul>
        <li>☑ People First Approach</li>
        <li>☑ Unwavering Commitment</li>
        <li>☑ Legacy in Every Cup</li>
      </ul>
      <button className="learn-more-btn">Learn More</button>
    </div>
  </div>
</section>

      <section className="loved-sips">
  <h2 className="loved-title">Our Most Loved Sips</h2>
  <p className="loved-subtitle">Crafted With Passion, Enjoyed With Love.</p>

  <div className="loved-cards">
    {/* Coffee */}
    <div className="loved-card">
      <img src="https://deglobecafe.in/wp-content/uploads/2025/03/coffee.jpeg" alt="Delicious Coffee" />
      <h3>Delicious Coffee</h3>
      <p>Freshly Brewed Coffee With A Deep, Rich Flavor To Kickstart Your Day.</p>
    </div>

    {/* Tea */}
    <div className="loved-card">
      <img src="https://deglobecafe.in/wp-content/uploads/2025/03/tea.jpeg" alt="Astonishing Tea" />
      <h3>Astonishing Tea</h3>
      <p>A Comforting Blend Of Tea Leaves, Milk, And Aromatic Spices.</p>
    </div>

    {/* Kulhad Tea */}
    <div className="loved-card">
      <img src="https://deglobecafe.in/wp-content/uploads/2025/03/kulad.jpeg" alt="Kulhad Tea" />
      <h3>Kulhad Tea</h3>
      <p>Traditional Indian Tea Served In An Mud Cup, Enhancing Its Rich Taste.</p>
    </div>
  </div>
</section>


   <div className="menu-page">
      {/* Cravings Section */}
      <section className="cravings-section">
        <h1 className="section-title">Menu Highlights</h1>
        <p className="section-subtitle">
          <h3><b>A taste of our most loved dishes and beverages.</b></h3>
        </p>

        <div className="carousel-wrapper">
          <button className="arrow-btn left" onClick={prevSlide} disabled={currentSlide === 0}>
            ❮
          </button>

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

          <button className="arrow-btn right" onClick={nextSlide} disabled={currentSlide >= maxSlide}>
            ❯
          </button>
        </div>
      </section>
      </div>
      


      {/* Reels/Highlights */}
      <section className="gallery-preview">
        <h2>Experience De Globe Café in Action!</h2>
        <p>A taste of our most loved dishes and beverages.<br></br><br />
Get a taste of the De Globe Café experience through our trending reels! Swipe <br /> through and let the cravings begin!</p>
        <div className="gallery-grid">
          {Array.from({ length: 4 }).map((_, idx) => (
            <img
              src="/assets/gallery-placeholder.jpg"
              alt={`Gallery ${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
      </section>

      {/* Experience Statement */}
      <section className="experience">
        <h2>Experience the New Standard in Café Culture</h2>
        <p>Crafted to deliver unforgettable experiences through inspired flavors, warm ambiance, and exceptional service.</p>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <h2>More Than Just a Café – It’s an Experience!</h2>
        <p>
          At De Globe Café, every sip, every bite, and every moment is crafted with love.❤️ 
          From authentic flavors to a cozy ambiance, here’s why our customers keep coming back!
        </p>
        <a href="/contact" className="btn-primary">Visit us today</a>
      </section>

    </div>
  );
}
