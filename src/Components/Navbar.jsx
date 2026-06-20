
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2 className="font-display text-2xl">
          Bella Hair
        </h2>
      </div>

      <div className="nav-menu">
        <ul className="nav-links">  
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>

        <button className="book-btn">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;