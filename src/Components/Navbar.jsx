
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav className="sticky top-0 z-50 bg-canvas/80 backdrop-blur-md border-none border-hairline py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <h2 className="font-display text-2xl">Bella Hair</h2>

              <div className="hidden md:flex items-center gap-8">
                  <ul className="flex gap-6 uppercase text-sm tracking-wider">
                      <li>
                          <Link
                              to="/"
                              className="text-black hover:text-yellow-600 transition">
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/services"
                              className="text-black hover:text-yellow-600 transition">
                              Services
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/about"
                              className="text-black hover:text-yellow-600 transition">
                              About
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/gallery"
                              className="text-black hover:text-yellow-600 transition">
                              Gallery
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/contact"
                              className="text-black hover:text-yellow-600 transition">
                              Contact
                          </Link>
                      </li>
                  </ul>

                  <Link to="/booking">
                      <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-400 transition">
                          Book Now
                      </button>
                  </Link>
              </div>

              <button
                  className="md:hidden text-2xl"
                  onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FiX /> : <FiMenu />}
              </button>
          </div>

          {menuOpen && (
              <div className="md:hidden mt-4 pb-4">
                  <ul className="flex flex-col gap-4 uppercase text-sm tracking-wider">
                      <li>
                          <Link to="/" onClick={() => setMenuOpen(false)}>
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/services"
                              onClick={() => setMenuOpen(false)}>
                              Services
                          </Link>
                      </li>
                      <li>
                          <Link to="/about" onClick={() => setMenuOpen(false)}>
                              About
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/gallery"
                              onClick={() => setMenuOpen(false)}>
                              Gallery
                          </Link>
                      </li>
                      <li>
                          <Link
                              to="/contact"
                              onClick={() => setMenuOpen(false)}>
                              Contact
                          </Link>
                      </li>
                  </ul>

                  <Link to="/booking">
                      <button className="mt-4 w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition">
                          Book Now
                      </button>
                  </Link>
              </div>
          )}
      </nav>
  );
}

export default Navbar;