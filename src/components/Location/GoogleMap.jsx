import React from 'react';
import './Location.css';

const GoogleMap = () => {
    return (
        <div className="map-container">
            <iframe
                title="Location Map"
                width="600"
                height="450"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=4352+Main+St,+Taylorsville,+CA+95983`}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default GoogleMap;
