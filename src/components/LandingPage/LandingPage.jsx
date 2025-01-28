import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import CustomMap from './GoogleMap';

const LandingPage = () => {
    return (
        <div>
            <div className="header">{<Header />}</div>
            <div className="landing">
                <div className="est-text">est. 2022</div>
            </div>
            <div>{<SideNav />}</div>
            <div className="meat-img-container">
                <img src="./assets/bacon.jpg" className="meat_img" />
                <div className="map-container">
                    <iframe
                        title="Location Map"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Place+Name,City,Country"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
            <div className="space"></div>
            <footer className="footer"></footer>
        </div>);


};

export default LandingPage;