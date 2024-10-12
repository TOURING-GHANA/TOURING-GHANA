
import React from 'react';
import { Map, Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';  // Ensure Mapbox styles are loaded

const MapComponent = () => {
  const mapStyle = 'mapbox://styles/mapbox/streets-v11';  // Ensure style URL is correct
  const mapboxToken = 'pk.eyJ1Ijoiem9vaGRldiIsImEiOiJjbTI2ZGp4cGQwdjYyMmtzamM3MTM0MXNuIn0.s1Hk8h6X3AufE3WmvUX_AA'; // Mapbox token

  // Inline styles for the container and map
  const mapContainerStyle = {
    width: '100%',
    height: '500px',  // Adjust the height based on your design needs
    borderRadius: '10px', // Optional: rounded corners for a modern look
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Optional: add a shadow for depth
  };

  const mapStyleObject = {
    width: '100%',
    height: '100%',
  };

  // Marker data
  const markerData = [
    {
      latitude: 5.603717,
      longitude: -0.186964,
    },
    {
      latitude: 5.470799,
      longitude: -0.205550,
    },
  ];

  return (
    <div style={mapContainerStyle}>
      <Map
        initialViewState={{
          longitude: -0.186964,
          latitude: 5.603717,
          zoom: 12
        }}
        style={mapStyleObject}  // Full width and height
        mapStyle={mapStyle}
        mapboxAccessToken={mapboxToken}
        logoPosition="bottom-right"  // Remove the Mapbox logo completely
        attributionControl={false}  // Disable the attribution box
        scrollZoom={true}  // Allow zoom with scroll
        dragPan={true}  // Allow dragging the map
        touchZoom={true}  // Allow pinch-to-zoom on mobile
        doubleClickZoom={true}  // Allow double-click to zoom
      >
        {/* Navigation Control: Zoom and Rotation controls */}
        <NavigationControl position="top-right" />

        {/* Dynamic Markers */}
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
          />
        ))}
      </Map>
    </div>
  );
};

export default MapComponent;
