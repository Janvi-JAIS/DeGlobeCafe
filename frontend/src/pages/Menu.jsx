import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";

const cravingsData = [
  { name: "Chicken Soup", desc: "A warm and hearty soup with shredded chicken and flavorful spices.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/chicken-soup-HIGH.jpg" },
  { name: "Chicken Momos Fry", desc: "Crispy fried momos stuffed with spicy chicken filling.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/chicken-momo-fry-HIGH-1024x683.jpeg" },
  { name: "Paneer Patties", desc: "A crunchy delight with soft, flavorful paneer stuffing.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/paneer_patties-high-1024x768.webp" },
  { name: "Veg Momo Steam", desc: "Soft steamed dumplings filled with fresh vegetables.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/veg_momo-steam-HIGH-1024x683.jpeg" },
  { name: "Grilled Chicken Burger", desc: "Juicy grilled chicken patty with sauces in a soft bun.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/grilled-chicken-burger-high-1024x683.jpeg" },
  { name: "Coffee", desc: "Freshly brewed coffee with a bold aroma.", img: "https://deglobecafe.in/wp-content/uploads/2025/03/coffee.jpeg" }
];

const textMenuData = [
  {
    category: "Tea / Coffee",
    emoji: "🍰",
    items: [
      { name: "Chai Kulhad", desc: "Traditional Indian tea served in an earthen kulhad.", price: "₹18" },
      { name: "Chai", desc: "Aromatic tea infused with Indian spices.", price: "₹16" },
      { name: "Coffee", desc: "Freshly brewed with bold aroma.", price: "₹25" },
      { name: "Cold Coffee", desc: "Chilled, creamy coffee shake.", price: "₹60" },
    ],
  },
  {
    category: "Momos / Soup",
    emoji: "🥟",
    items: [
      { name: "Veg Momo (Steam)", desc: "Soft steamed dumplings with vegetables.", price: "₹70" },
      { name: "Chicken Momo (Steam)", desc: "Steamed dumplings stuffed with chicken.", price: "₹100" },
      { name: "Veg Momo (Fry)", desc: "Crispy fried vegetable dumplings.", price: "₹90" },
      { name: "Chicken Momo (Fry)", desc: "Golden fried chicken dumplings.", price: "₹120" },
      { name: "Veg Soup", desc: "Warm soup with fresh vegetables.", price: "₹70" },
      { name: "Chicken Soup", desc: "Rich soup with shredded chicken.", price: "₹90" },
    ],
  },
  {
    category: "Burgers / Snacks",
    emoji: "🍔",
    items: [
      { name: "Aloo Burger", desc: "Soft bun with spiced potato patty.", price: "₹50" },
      { name: "Veg Creamy Burger", desc: "Creamy veg patty with cheese.", price: "₹60" },
      { name: "Paneer Burger", desc: "Paneer patty with sauces.", price: "₹70" },
      { name: "Grilled Chicken Burger", desc: "Juicy grilled chicken patty.", price: "₹120" },
      { name: "Paneer Patties", desc: "Flaky pastry with paneer filling.", price: "₹35" },
      { name: "Chicken Samosa", desc: "Crispy samosa with minced chicken.", price: "₹40" },
    ],
  },
  {
    category: "Maggi / Noodles",
    emoji: "🍜",
    items: [
      { name: "Classic Maggi", desc: "Hot and flavorful noodles.", price: "₹40" },
      { name: "Cheesy Maggi", desc: "Maggi loaded with cheese.", price: "₹60" },
      { name: "Chicken Garlic Noodles", desc: "Garlic-flavored noodles with chicken.", price: "₹100" },
    ],
  },
  {
    category: "Rice / Paneer",
    emoji: "🍚",
    items: [
      { name: "Chicken Fried Rice", desc: "Rice with vegetables and chicken.", price: "₹110" },
      { name: "Paneer Chilli Dry", desc: "Paneer with capsicum and spicy sauce.", price: "₹120" },
    ],
  },
];

function getItemsPerViewByWidth(width) {
  if (width >= 992) return 3;
  if (width >= 768) return 2;
  return 1;
}

const Menu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerViewByWidth(window.innerWidth));
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef(null);
   const textMenuRef = useRef(null);
  const gapPx = 20; // same as CSS gap

    const scrollToTextMenu = () => {
    if (textMenuRef.current) {
      textMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // handler to update itemsPerView and recompute widths
    const handleResize = () => {
      const newItemsPerView = getItemsPerViewByWidth(window.innerWidth);
      setItemsPerView(newItemsPerView);

      // compute widths based on container
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const computedCardWidth = Math.floor((containerWidth - gapPx * (newItemsPerView - 1)) / newItemsPerView);
        setCardWidth(computedCardWidth);
        // clamp currentSlide so we don't overflow
        const maxSlide = Math.max(0, cravingsData.length - newItemsPerView);
        setCurrentSlide(prev => Math.min(prev, maxSlide));
      }
    };

    // initial
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // next / prev
  const maxSlide = Math.max(0, cravingsData.length - itemsPerView);
  const nextSlide = () => setCurrentSlide(s => Math.min(s + 1, maxSlide));
  const prevSlide = () => setCurrentSlide(s => Math.max(s - 1, 0));

  // calculate translate in pixels
  const translateX = -(currentSlide * (cardWidth + gapPx));

  return (
    
    <div className="menu-page">
   
   <section className="hero">
  <div className="hero-container">
    {/* Left text */}
    <div className="hero-text">
      <h4>De Globe Cafe</h4>
      <h1>
        Indulge in <br />the Best<br/> Flavors of <br/>Lucknow
      </h1>
      <p>
        From aromatic teas to sizzling snacks, every bite and sip is crafted to perfection!
      </p>
      <button onClick={scrollToTextMenu} className="btn-primary">View full Menu</button>
    </div>

    {/* Right image */}
    <div className="hero-image">
      <img 
        src="https://deglobecafe.in/wp-content/uploads/2025/04/a-cinematic-shot-of-a-gourmet-burger-flo_jQ9IzlDSQNuXgIoaxU0GOg_099Bu5L7SNC9djLKYuKZYg-removebg-preview-700x700.png" 
        alt="Coffee cup"
      />
    </div>
  </div>
</section>

      
      <section className="cravings-section">
        <h1 className="section-title">Cravings? We’ve Got You Covered!</h1>
        <p className="section-subtitle">
          From sizzling burgers to creamy cold coffee, explore the top picks from our kitchen.
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

      {/* Explore Menu Section */}
      <section className="text-menu-section"ref={textMenuRef}>
        <h1 className="section-title">Explore Our Menu</h1>
        <p className="section-subtitle">
          Crafted with a list of the most delicious Indian dishes, prepared with love and a high passion for cooking.
        </p>

        <div className="menu-grid">
          {textMenuData.map((section, i) => (
            <div className="text-menu-category" key={i}>
              <h2><span className="menu-emoji">{section.emoji}</span> {section.category}</h2>
              <hr />
              {section.items.map((item, j) => (
                <div className="text-menu-item" key={j}>
                  <div className="item-left">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="item-price">{item.price}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="best-sellers">
        <h1>Bestsellers You’ll Love!</h1>
<p>Discover our most-loved dishes, handpicked by our customers! From sizzling flavors to comforting classics, these <br />top picks keep everyone coming back for more. 🍽️✨ </p>


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

export default Menu;
