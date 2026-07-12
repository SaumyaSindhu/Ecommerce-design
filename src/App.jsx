import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import FlashSales from './components/FlashSales/FlashSales';
import BrowseByCategory from './components/BrowseByCategory/BrowseByCategory';
import BestSelling from './components/BestSelling/BestSelling';
import ExploreProducts from './components/ExploreProducts/ExploreProducts';
import NewArrival from './components/NewArrival/NewArrival';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />

      <main>
        <HeroBanner />

        <div className="container-custom">
          <div className="section-divider" />
        </div>

        <FlashSales />

        <div className="container-custom">
          <div className="section-divider" />
        </div>

        <BrowseByCategory />

        <div className="container-custom">
          <div className="section-divider" />
        </div>

        <BestSelling />

        <div className="container-custom">
          <div className="section-divider" />
        </div>

        <ExploreProducts />

        <div className="container-custom">
          <div className="section-divider" />
        </div>

        <NewArrival />
      </main>

      <Footer />
    </div>
  );
}

export default App;
