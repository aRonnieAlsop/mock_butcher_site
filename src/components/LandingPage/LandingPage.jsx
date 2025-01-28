import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';

const LandingPage = () => {
    return (
        <div>
            <div className="header">{<Header />}</div>
            <div className="landing">
                <div className="est-text">est. 2022</div>
            </div>
            <div>{<SideNav />}</div>
            <div className="space"></div>
            <footer className="footer"></footer>
        </div>);


};

export default LandingPage;