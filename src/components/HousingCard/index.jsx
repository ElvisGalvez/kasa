import React from 'react';
import './HousingCard.css';

const HousingCard = ({ housing }) => {
  return (
    <div 
      className="housing-card" 
      style={{ '--background-image': `url(${housing.cover})` }}
    >
      <h2>{housing.title}</h2>
    </div>
  );
};

export default HousingCard;
