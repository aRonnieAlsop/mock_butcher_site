import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1>Indian Valley Butchers</h1>
      </div>

      <div className="nav-links">
        <div className="phone-number">
          <a href="tel:+15555555555">555-555-5555</a>
        </div>

        <a href="/our-story">Our Story</a>

        <div className="services-dropdown">
          <a href="#">Services</a> 
          <ul>
            <li><a href="/services/web-development">Custom Cut & Wrap</a></li>
            <li><a href="/services/graphic-design">Ranch Butcher</a></li>
            <li><a href="/services/game-processing">Wild Game Processing</a></li>
          </ul>
        </div>

        <a href="/location">Location</a>
      </div>
    </header>
  );
};

export default Header;
