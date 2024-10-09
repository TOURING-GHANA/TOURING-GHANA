
import React from 'react';
import { Map, Marker } from 'react-map-gl';

const MapComponent = () => {
  const mapStyle = 'mapbox://styles/mapbox/streets-v11';
  const mapboxToken = 'https://api.mapbox.com/{endpoint}?access_token={your_access_token}';  // Mapbox token 

  return (
    <Map
      initialViewState={{
        longitude: -0.186964,
        latitude: 5.603717,
        zoom: 12
      }}
      style={{ width: '100%', height: 400 }}
      mapStyle={mapStyle}
      mapboxAccessToken={mapboxToken}
    >
      <Marker longitude={-0.186964} latitude={5.603717} />
    </Map>
  );
}

export default MapComponent;
