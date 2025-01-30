import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import GoogleMap from './../Location/GoogleMap';
import smoothScroll from 'smooth-scroll-into-view-if-needed';

const LandingPage = () => {

    const handleBackToTopClick = (e) => {
        e.preventDefault();
        const targetElement = document.getElementById("top-of-page");
        if (targetElement) {
            smoothScroll(targetElement, {
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
                duration: 2000
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
            <div className="location-container" id="map-section">
                <GoogleMap />
            </div>
            <div></div>
            <div className="space"></div>
            <footer className="footer">
            <a className="back-to-top" onClick={handleBackToTopClick}>↑ Back to Top ↑</a>
            </footer>
        </div>);


};

export default LandingPage;