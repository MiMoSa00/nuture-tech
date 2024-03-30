import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import './MapStyles.css';

const soairHubLocation = {
  lat: 6.57222,
  lng: 3.33528,
};

const Map = () => {
  return (
    <div className="map-container">
      <MapContainer center={[soairHubLocation.lat, soairHubLocation.lng]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[soairHubLocation.lat, soairHubLocation.lng]}>
          <Popup>
            SOAIR Hub, Sam Ethan Air Base, Ikeja, Lagos, Nigeria.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;