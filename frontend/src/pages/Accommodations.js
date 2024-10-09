
import React from 'react';
import Listing from '../components/Listing';

function Accommodations() {
  const accommodations = [
    { name: 'Beach Resort', description: 'A beautiful beach resort in Ghana.', price: '$150/night' },
    { name: 'Mountain Lodge', description: 'Stay at a peaceful mountain lodge.', price: '$120/night' }
  ];

  return (
    <div>
      <h2>Accommodations</h2>
      <div className="accommodation-list">
        {accommodations.map((item, index) => (
          <Listing key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Accommodations;
