import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './BrowseByCategory.css';

const categories = [
  { id: 1, name: 'Phones', icon: '📱', emoji: true },
  { id: 2, name: 'Computers', icon: '💻', emoji: true },
  { id: 3, name: 'SmartWatch', icon: '⌚', emoji: true },
  { id: 4, name: 'Camera', icon: '📷', emoji: true },
  { id: 5, name: 'HeadPhones', icon: '🎧', emoji: true },
  { id: 6, name: 'Gaming', icon: '🎮', emoji: true },
  { id: 7, name: 'Sports', icon: '⚽', emoji: true },
  { id: 8, name: 'Fashion', icon: '👗', emoji: true },
];

const BrowseByCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: dir === 'next' ? 200 : -200, behavior: 'smooth' });
  };

  return (
    <section className="category-section" id="browse-by-category">
      <div className="container-custom">
        <div className="section-tag">
          <div className="tag-bar" />
          <span>Categories</span>
        </div>

        <div className="section-title-row">
          <h2 className="section-title">Browse By Category</h2>
          <div className="nav-arrows">
            <button className="nav-arrow-btn prev" onClick={() => scroll('prev')} aria-label="Previous">
              <FiChevronLeft size={20} />
            </button>
            <button className="nav-arrow-btn next" onClick={() => scroll('next')} aria-label="Next">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="category-scroll-wrapper">
          <div className="category-scroll" ref={scrollRef}>
            {categories.map((cat) => (
              <a key={cat.id} href="#" className="category-card">
                <div className="category-icon-wrapper">
                  <span className="category-icon">{cat.icon}</span>
                </div>
                <span className="category-name">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
