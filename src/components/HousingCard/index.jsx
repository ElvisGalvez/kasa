import React from 'react';
import { Link } from 'react-router-dom';
import './HousingCard.css';

const HousingCard = ({ housing }) => {
  return (
    <Link to={`/housing/${housing.id}`} style={{ textDecoration: 'none' }}>
      <div 
        className="housing-card" 
        style={{ '--background-image': `url(${housing.cover})` }}
      >
        <h2>{housing.title}</h2>
      </div>
    </Link>
  );
};

export default HousingCard;
