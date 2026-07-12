import React, { useState } from 'react';
import { FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Sign Up', href: '#' },
];

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-custom">
      <div className="navbar-inner container-custom">
        <div className="navbar-logo-block">
          <a href="#" className="navbar-logo">Eco-Mart</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="nav-link-item">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
            <button className="search-btn" aria-label="Search">
              <FiSearch size={20} />
            </button>
          </div>

          <div className="nav-icons">
            <button className="icon-btn" aria-label="Wishlist">
              <FiHeart size={24} />
            </button>
            <button className="icon-btn cart-btn" aria-label="Cart">
              <FiShoppingCart size={24} />
              <span className="cart-badge">2</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
