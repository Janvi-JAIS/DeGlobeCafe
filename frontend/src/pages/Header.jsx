import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-navbar">
      <div className="navbar-container">
        {/* Text Logo */}
        <NavLink to="/" className="logo">
          De Globe Cafe
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/ourstory">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <a 
  href="https://www.google.com/search?sca_esv=c4730c0d5f6ba8e9&cs=1&output=search&kgmid=/g/11l4cck0nk&q=De+Globe+Cafe&shndl=30&shem=lcuae,uaasie&source=sh/x/loc/uni/m1/1&kgs=9d31530bf20705f3" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="cta"
>
  Visit Us Today
</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
