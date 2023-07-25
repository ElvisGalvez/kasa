import React from 'react';
import './HousingCardList.css';
import housingData from '../../data/logements.json';
import HousingCard from '../HousingCard';

const HousingCardList = () => {
  return (
    <div className="housing-card-list">
      {housingData.map((housing, index) => (
        <HousingCard key={index} housing={housing} />
      ))}
    </div>
  );
};

export default HousingCardList;
