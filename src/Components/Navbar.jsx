
import "./Navbar.css";

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
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
        </ul>

        <button className="book-btn">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;