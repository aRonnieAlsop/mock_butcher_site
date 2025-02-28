import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "450px",
};

const center = {
    lat: 40.075004522863765, 
    lng: -120.8412190836375,
  };

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Ensure .env file is set up correctly
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Custom marker */}
      <Marker 
        position={center} 
        icon={{
          url: "/assets/cleaver_vector.png", // Ensure this image exists in `public/assets/`
          scaledSize: new window.google.maps.Size(50, 50), 
        }} 
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
