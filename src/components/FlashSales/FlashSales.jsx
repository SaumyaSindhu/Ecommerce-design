import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProductCard from '../ProductCard/ProductCard';
import './FlashSales.css';
import gamepad from "../../assets/gamepad.png";
import keyboard from "../../assets/keyboard.jpg"; 
import monitor from "../../assets/monitor.jpg";
import chair from "../../assets/chair.jpg";
import headset from "../../assets/headset.jpg";
import mouse from "../../assets/mouse.jpg";
import hub from "../../assets/hub.jpg";
import earbuds from "../../assets/earbuds.jpg";

const flashProducts = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    image: gamepad,
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4.0,
    reviews: 75,
    image: keyboard,
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 4.5,
    reviews: 99,
    image: monitor,
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: chair,
  },
  {
    id: 5,
    name: 'Gaming Headset Pro',
    price: 89,
    oldPrice: 120,
    discount: 25,
    rating: 4.0,
    reviews: 65,
    image: headset,
  },
  {
    id: 6,
    name: 'Mechanical Mouse X9',
    price: 45,
    oldPrice: 65,
    discount: 30,
    rating: 4.5,
    reviews: 112,
    image: mouse,
  },
  {
    id: 7,
    name: 'USB-C Hub 7-Port',
    price: 55,
    oldPrice: 75,
    discount: 27,
    rating: 4.0,
    reviews: 43,
    image: hub,
  },
  {
    id: 8,
    name: 'Wireless Earbuds Pro',
    price: 130,
    oldPrice: 180,
    discount: 28,
    rating: 4.5,
    reviews: 203,
    image: earbuds,
  },
];

const INITIAL_TIME = 3 * 86400 + 23 * 3600 + 19 * 60 + 56;

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className="countdown-label">Days</span>
        <span className="countdown-value">{pad(days)}</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-item">
        <span className="countdown-label">Hours</span>
        <span className="countdown-value">{pad(hours)}</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-item">
        <span className="countdown-label">Minutes</span>
        <span className="countdown-value">{pad(minutes)}</span>
      </div>
      <span className="countdown-sep">:</span>
      <div className="countdown-item">
        <span className="countdown-label">Seconds</span>
        <span className="countdown-value">{pad(seconds)}</span>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = 280;
    container.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="flash-sales-section" id="flash-sales">
      <div className="container-custom">
        <div className="section-tag">
          <div className="tag-bar" />
          <span>Today's</span>
        </div>

        <div className="section-title-row flash-title-row">
          <h2 className="section-title">Flash Sales</h2>
          <div className="flash-right">
            <Countdown />
            <div className="nav-arrows">
              <button className="nav-arrow-btn prev" onClick={() => scroll('prev')} aria-label="Previous">
                <FiChevronLeft size={20} />
              </button>
              <button className="nav-arrow-btn next" onClick={() => scroll('next')} aria-label="Next">
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="flash-products-wrapper">
          <div className="flash-products-scroll" ref={scrollRef}>
            {flashProducts.map((product) => (
              <div key={product.id} className="flash-product-item">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="view-all-wrapper">
          <a href="#" className="btn-primary-custom view-all-btn">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
