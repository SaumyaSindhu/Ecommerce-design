import React from 'react';
import { FiHeart, FiEye } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './ProductCard.css';

const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) stars.push(<FaStar key={i} />);
    else if (i === fullStars && hasHalf) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return <div className="rating-stars">{stars}</div>;
};

const ProductCard = ({ product }) => {
  const { name, price, oldPrice, discount, rating, reviews, image } = product;

  return (
    <div className="product-card">
      <div className="card-img-wrapper">
        {discount && <span className="discount-badge">-{discount}%</span>}
        <img src={image} alt={name} onError={(e) => {
          e.target.src = `https://placehold.co/300x300/f5f5f5/ccc?text=${encodeURIComponent(name.split(' ')[0])}`;
        }} />

        <div className="card-actions">
          <button className="action-btn" aria-label="Add to wishlist">
            <FiHeart size={16} />
          </button>
          <button className="action-btn" aria-label="Quick view">
            <FiEye size={16} />
          </button>
        </div>

        <div className="add-to-cart-overlay">Add To Cart</div>
      </div>

      <div className="card-body">
        <h3 className="product-name" title={name}>{name}</h3>
        <div className="price-row">
          <span className="price-current">${price}</span>
          {oldPrice && <span className="price-old">${oldPrice}</span>}
        </div>
        <div className="rating-row">
          <StarRating rating={rating} />
          <span className="rating-count">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
