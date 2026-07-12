import React, { useState } from 'react';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './ExploreProducts.css';
import dogfood from "../../assets/dogfood.jpg";
import camera from "../../assets/camera.jpg";
import laptop from "../../assets/laptop.jpg";
import skincare from "../../assets/skincare.jpg";
import kidCar from "../../assets/kidCar.jpg";
import soccer from "../../assets/soccer.jpg";
import gp11 from "../../assets/gp11.jpg";
import jacket from "../../assets/jacket.jpg";

const filterTabs = [
  'All',
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

const allProducts = [
  { id: 1, name: 'Breed Dry Dog Food',        price: 100, rating: 3,   reviews: 35,  image: dogfood,     category: "Groceries & Pets"  },
  { id: 2, name: 'CANON EOS DSLR Camera',     price: 360, rating: 4,   reviews: 95,  image: camera,       category: 'Electronics'       },
  { id: 3, name: 'ASUS FHD Gaming Laptop',    price: 700, rating: 5,   reviews: 325, image: laptop,       category: 'Electronics'       },
  { id: 4, name: 'Curology Product Set',      price: 500, rating: 4,   reviews: 145, image: skincare,     category: 'Health & Beauty'   },
  { id: 5, name: 'Kids Electric Car',         price: 960, rating: 5,   reviews: 65,  image: kidCar,     category: "Baby's & Toys"     },
  { id: 6, name: 'Jr. Zoom Soccer Cleats',    price: 1160,rating: 5,   reviews: 35,  image: soccer,       category: 'Sports & Outdoor'  },
  { id: 7, name: 'GP11 Shooter USB Gamepad',  price: 660, rating: 4.5, reviews: 55,  image: gp11,         category: 'Electronics'       },
  { id: 8, name: 'Quilted Satin Jacket',      price: 660, rating: 4.5, reviews: 55,  image: jacket,       category: "Woman's Fashion"   },
];

const StarRating = ({ rating }) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    if (i < full)               stars.push(<FaStar key={i} />);
    else if (i === full && half) stars.push(<FaStarHalfAlt key={i} />);
    else                        stars.push(<FaRegStar key={i} />);
  }
  return <div className="rating-stars">{stars}</div>;
};

const ExploreCard = ({ product }) => (
  <div className="product-card explore-card">
    <div className="card-img-wrapper">
      <div className="card-actions">
        <button className="action-btn" aria-label="Wishlist"><FiHeart size={16} /></button>
        <button className="action-btn" aria-label="Quick view"><FiEye size={16} /></button>
      </div>
      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.src = `https://placehold.co/300x300/f5f5f5/bbb?text=${encodeURIComponent(product.name.split(' ')[0])}`;
        }}
      />
      <div className="add-to-cart-overlay">Add To Cart</div>
    </div>
    <div className="card-body">
      <h3 className="product-name" title={product.name}>{product.name}</h3>
      <div className="price-row">
        <span className="price-current">${product.price}</span>
      </div>
      <div className="rating-row">
        <StarRating rating={product.rating} />
        <span className="rating-count">({product.reviews})</span>
      </div>
    </div>
  </div>
);

const ExploreProducts = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <section className="explore-section" id="explore-products">
      <div className="container-custom">
        <div className="section-tag">
          <div className="tag-bar" />
          <span>Our Products</span>
        </div>

        <div className="section-title-row" style={{ marginBottom: '32px' }}>
          <h2 className="section-title">Explore Our Products</h2>
        </div>

        <div className="explore-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="explore-grid">
          {filtered.map((product) => (
            <ExploreCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all-wrapper">
          <a href="#" className="btn-primary-custom">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;
