import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Hamburger menu for small screens */}
        <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/accommodations" onClick={closeMenu}>Accommodations</Link></li>
          <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

