import React from 'react';
import './Header.css';
import smoothScroll from 'smooth-scroll-into-view-if-needed';


const Header = ({ mapSectionRef }) => {

  const handleLocationClick = (e) => {
    e.preventDefault();
    if (mapSectionRef && mapSectionRef.current) {
      smoothScroll(mapSectionRef.current, {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        duration: 2000
      });
    }
  };

  return (
    <header className="header">
      <div className="left">
        <h1>Koyom Valley Butchers</h1>
      </div>
      <div className="logo">
        <img src="./assets/cleaver_vector.png"/>
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

        <a onClick={handleLocationClick}>Location</a>
      </div>
    </header>
  );
};

export default Header;
