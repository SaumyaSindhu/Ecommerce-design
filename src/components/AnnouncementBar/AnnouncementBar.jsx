import React, { useState } from 'react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  const [language, setLanguage] = useState('English');

  return (
    <div className="announcement-bar">
      <div className="announcement-content container-custom">
        <div className="announcement-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#" className="shop-link">ShopNow</a>
        </div>
        <div className="lang-selector">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-select"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
