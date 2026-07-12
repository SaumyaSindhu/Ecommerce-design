import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './BestSelling.css';
import coat from "../../assets/coat.jpg";
import bag from "../../assets/bag.jpg";
import cooler from "../../assets/cooler.jpg";
import bookshelf from "../../assets/bookshelf.jpg";
import musicbanner from "../../assets/musicbanner.png";

const bestSellingProducts = [
  {
    id: 1,
    name: 'The north coat',
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
    image: coat,
  },
  {
    id: 2,
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: bag,
  },
  {
    id: 3,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: cooler,
  },
  {
    id: 4,
    name: 'Small BookShelf',
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: bookshelf,
  },
];

const BestSelling = () => {
  return (
    <section className="best-selling-section" id="best-selling">
      <div className="container-custom">
        <div className="section-tag">
          <div className="tag-bar" />
          <span>This Month</span>
        </div>

        <div className="section-title-row" style={{ marginBottom: '40px' }}>
          <h2 className="section-title">Best Selling Products</h2>

          <div className="best-selling-view-all">
            <a href="#" className="btn-primary-custom">View All</a>
          </div>
        </div>

        <div className="best-selling-grid">
          {bestSellingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="music-banner">
          <img src={musicbanner} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
