import React, {useRef} from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import GoogleMapComponent from "./../Location/GoogleMap";




const LandingPage = () => {

  const mapSectionRef = useRef(null);

  const handleBackToTopClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("top-of-page");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div id="top-of-page">
      <div className="header">{<Header mapSectionRef={mapSectionRef}/>}</div>
      <div className="landing">
        <div className="est-text">est. 2022</div>
      </div>
      <div>{<SideNav />}</div>
      {/* Location section with Image + Map */}
      <div className="location-container" ref={mapSectionRef} id="map-section">
        {/* Image Section */}
        <div className="location-image">
          <img
           src="/tville_downtown.jpg"
            alt="Butcher Shop"
            className="meat-img"
          />
          <div className="sash-banner"></div> 
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
