import React from 'react';
import './LandingPage.css';
import Header from '../Header/Header';

const LandingPage = () => {
    return (
        <div>
            <div className="header">{<Header />}</div>
            <div className="landing">
                <div className="est-text">est. 2022</div>
            </div>
        </div>);


};

export default LandingPage;