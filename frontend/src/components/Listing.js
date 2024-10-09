
import React from 'react';

function Listing({ name, description, price, image }) {
  return (
    <div className="listing">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default Listing;
