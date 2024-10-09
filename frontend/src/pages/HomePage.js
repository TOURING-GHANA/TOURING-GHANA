// src/pages/HomePage.js
import React from 'react';
import SearchBar from '../components/searchbar';
import Listing from '../components/Listing';
import MapComponent from '../components/Map';
import './HomePage.css';




function HomePage() {
  const featuredListings = [
    { name: 'Cape Coast Castle', description: 'Historical tour of Cape Coast Castle.', price: '$50', image: 'cape-coast.jpg' },
    { name: 'Kakum National Park', description: 'Experience the beauty of Kakum National Park.', price: '$100', image: 'kakum.jpg' }
  ];

  return (
    <div className="homepage">
     
      {/* Hero Section */}
      <section className="hero">
      
        <div className="hero-content">
          <h1>Welcome to Touring Ghana</h1>
          <p>Discover the beauty of Ghana. Explore top destinations, book accommodations, and plan unforgettable experiences.</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2>Search for Destinations and Tours</h2>
        <SearchBar placeholder="Search destinations, accommodations, or tours..." />
      </section>

      {/* Featured Listings */}
      <section className="featured-listings">
        <h2>Featured Destinations & Tours</h2>
        <div className="listings-grid">
          {featuredListings.map((listing, index) => (
            <Listing key={index} {...listing} />
          ))}
        </div>
      </section>

      {/* Interactive Map Preview */}
      <section className="map-section">
        <h2>Explore the Map</h2>
        <MapComponent />
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Touring Ghana. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
