import React from 'react';
import { FiSend } from 'react-icons/fi';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import './Footer.css';
import QR from "../../assets/QR.webp";
import play from "../../assets/play.png";
import app from "../../assets/app.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">Eco-Mart</h3>
            <p className="footer-tagline">Subscribe</p>
            <p className="footer-desc">Get 10% off your first order</p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter your email" className="subscribe-input" />
              <button className="subscribe-btn" aria-label="Subscribe">
                <FiSend size={18} />
              </button>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <address className="footer-address">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
            </address>
            <a href="mailto:exclusive@gmail.com" className="footer-link">exclusive@gmail.com</a>
            <a href="tel:+88015888889999" className="footer-link">+88015-88888-9999</a>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Account</h4>
            <ul className="footer-links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Login / Register</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Wishlist</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Link</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Download App</h4>
            <p className="footer-desc footer-app-desc">Save $3 with App New User Only</p>
            <div className="footer-qr">
              <div className="qr-code" aria-label="QR Code">
                <div className="qr-placeholder"><img src={QR} alt="QR" /></div>
              </div>
              <div className="app-badges">
                <a href="#" className="app-badge"><img src={play} alt="" /></a>
                <a href="#" className="app-badge"><img src={app} alt="" /></a>
              </div>
            </div>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="social-link" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright Eco-Mart 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
