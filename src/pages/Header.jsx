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
          <Link to="/contact" className="cta">Visit Us Today</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
