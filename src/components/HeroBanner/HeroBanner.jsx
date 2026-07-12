import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import './HeroBanner.css';

import heroBanner from '../../assets/Frame 560.jpg';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  "Baby's & Toys",
  'Groceries & Pets',
  'Health & Beauty',
];

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <div className="container-custom">
        <div className="hero-layout">

          <aside className="hero-sidebar">
            <ul className="category-list">
              {categories.map((cat) => (
                <li key={cat}>
                  <a href="#" className="category-item">
                    <span>{cat}</span>
                    {(cat === "Woman's Fashion" || cat === "Men's Fashion") && (
                      <FiChevronRight size={16} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="hero-divider" />

          <div className="hero-banner">
            <img src={heroBanner} alt="Hero Banner" className="hero-bg-img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
