import React, { useEffect } from 'react';

const CustomMap = () => {
  useEffect(() => {
    const mapOptions = {
      center: { lat: 40.748817, lng: -73.985428 }, 
      zoom: 12,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
      ]
    };

    const map = new window.google.maps.Map(document.getElementById("map"), mapOptions);
    new window.google.maps.Marker({
      position: { lat: 40.748817, lng: -73.985428 }, 
      map: map,
      title: "Your Location"
    });
  }, []);

  return (
    <div id="map" style={{ height: '500px', borderRadius: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}></div>
  );
};

export default CustomMap;
