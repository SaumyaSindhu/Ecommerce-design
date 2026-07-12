import React from 'react';
import { FiHeart, FiEye } from 'react-icons/fi';
import './NewArrival.css';
import playstation from "../../assets/playstation.jpg";
import women from "../../assets/women.jpg";
import speakers from "../../assets/speakers.jpg";
import perfume from "../../assets/perfume.jpg";

const NewArrival = () => {
  return (
    <section className="new-arrival-section" id="new-arrival">
      <div className="container-custom">
        <div className="section-tag">
          <div className="tag-bar" />
          <span>Featured</span>
        </div>

        <div className="section-title-row">
          <h2 className="section-title">New Arrival</h2>
        </div>

        <div className="new-arrival-grid">
          <div className="new-arrival-featured">
            <div className="featured-card">
              <div className="featured-bg">
                <div className="featured-glow" />
                <img
                  src={playstation}
                  alt="PlayStation 5"
                  className="featured-img"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/400x400/111/444?text=PS5';
                  }}
                />
              </div>
              <div className="featured-content">
                <h3 className="featured-name">PlayStation 5</h3>
                <p className="featured-desc">Black and White version of the PS5 coming out on sale.</p>
                <a href="#" className="featured-link">Shop Now →</a>
              </div>
              <div className="card-actions">
                <button className="action-btn" aria-label="Wishlist"><FiHeart size={16} /></button>
                <button className="action-btn" aria-label="Quick view"><FiEye size={16} /></button>
              </div>
            </div>
          </div>

          <div className="new-arrival-right">
            <div className="side-card women-card">
              <div className="side-card-bg" />
              <img
                src={women}
                alt="Women's Collections"
                className="side-card-img"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/300x200/f9d4d4/c33?text=Women+Collection';
                }}
              />
              <div className="side-card-content">
                <h3 className="side-card-name">Women's Collections</h3>
                <p className="side-card-desc">Featured woman collections that give you another vibe.</p>
                <a href="#" className="featured-link">Shop Now →</a>
              </div>
              <div className="card-actions">
                <button className="action-btn" aria-label="Wishlist"><FiHeart size={16} /></button>
                <button className="action-btn" aria-label="Quick view"><FiEye size={16} /></button>
              </div>
            </div>

            <div className="side-card-row">
              <div className="side-card bottom-card">
                <img
                  src={speakers}
                  alt="Speakers"
                  className="side-card-img-sm"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/200x160/f5f5f5/999?text=Speaker';
                  }}
                />
                <div className="side-card-content">
                  <h3 className="side-card-name">Speakers</h3>
                  <p className="side-card-desc">Amazon wireless speakers</p>
                  <a href="#" className="featured-link">Shop Now →</a>
                </div>
                <div className="card-actions">
                  <button className="action-btn" aria-label="Wishlist"><FiHeart size={16} /></button>
                  <button className="action-btn" aria-label="Quick view"><FiEye size={16} /></button>
                </div>
              </div>

              <div className="side-card bottom-card">
                <img
                  src={perfume}
                  alt="Perfume"
                  className="side-card-img-sm"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/200x160/f5f0e8/9a8060?text=Gucci';
                  }}
                />
                <div className="side-card-content">
                  <h3 className="side-card-name">Perfume</h3>
                  <p className="side-card-desc">GUCCI INTENSE OUD EDP</p>
                  <a href="#" className="featured-link">Shop Now →</a>
                </div>
                <div className="card-actions">
                  <button className="action-btn" aria-label="Wishlist"><FiHeart size={16} /></button>
                  <button className="action-btn" aria-label="Quick view"><FiEye size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
