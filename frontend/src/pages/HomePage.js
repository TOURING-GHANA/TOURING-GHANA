import React, { useEffect } from 'react';
import SearchBar from '../components/searchbar';
import Listing from '../components/Listing';
import MapComponent from '../components/Map';
import './HomePage.css';

// Import images from the assets folder
import CapeCoastImage from '../pages/capecoast.jpg';
import KakumImage from '../pages/kakum.jpg';
import Image3 from '../images/Image3.jpg';

function HomePage() {
  // Featured listings with imported images
  const featuredListings = [
    { name: 'Cape Coast Castle', description: 'Historical tour of Cape Coast Castle.', price: '$50', image: CapeCoastImage },
    { name: 'Kakum National Park', description: 'Experience the beauty of Kakum National Park.', price: '$100', image: KakumImage }
  ];

  // Slider functionality using React hooks
  useEffect(() => {
    let slideIndex = 0;

    function showSlides() {
      const slides = document.querySelectorAll('.slide');
      
      // Hide all slides by default
      slides.forEach(slide => {
        slide.style.display = 'none';
      });

      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 } // Loop back to the first slide

      slides[slideIndex - 1].style.display = 'block'; // Show the current slide

      setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    showSlides(); // Initialize the slider
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section with Image Slider */}
      <section className="hero">
        <div className="hero-slider">
          <div className="slide fade">
            <img src={CapeCoastImage} alt="Cape Coast" />
          </div>
          <div className="slide fade">
            <img src={KakumImage} alt="Kakum National Park" />
          </div>
          <div className="slide fade">
            <img src={Image3} alt="Slide 3" /> {/* Add your third image */}
          </div>
        </div>

        <div className="hero-content">
          <h1>Welcome to Touring Ghana</h1>
          <p>Discover the beauty of Ghana. Explore top destinations, book accommodations, and plan unforgettable experiences.</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </section>

      {/* Search Section */}
      <div className="main-container">
        <section className="search-section">
          <h2>Search for Destinations and Tours</h2>
          <input
            type="search"
            className="search-bar-input"
            placeholder="Search for destinations, tours, or experiences"
          />
        </section>
      </div>

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
