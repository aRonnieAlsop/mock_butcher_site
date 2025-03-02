import React from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import GoogleMapComponent from "./../Location/GoogleMap";
import smoothScroll from "smooth-scroll-into-view-if-needed";

const LandingPage = () => {
  const handleBackToTopClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("top-of-page");
    if (targetElement) {
      smoothScroll(targetElement, {
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        duration: 2000,
      });
    }
  };

  return (
    <div id="top-of-page">
      <div className="header">{<Header />}</div>
      <div className="landing">
        <div className="est-text">est. 2022</div>
      </div>
      <div>{<SideNav />}</div>
      {/* Location section with Image + Map */}
      <div className="location-container" id="map-section">
        {/* Image Section */}
        <div className="location-image">
        <div className="sash-banner">Coming Soon</div>
          <img
            src="https://www.roadschoolwarriors.com/wp-content/uploads/2010/12/DSCF37211.jpg"
            alt="Butcher Shop"
            className="meat-img"
          />
        </div>
        {/* Map Section */}
        <div className="map-wrapper">
          <GoogleMapComponent />
        </div>
      </div>

      <footer className="footer">
        <a className="back-to-top" onClick={handleBackToTopClick}>
          ↑ BACK TO THE TOP ↑
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;
