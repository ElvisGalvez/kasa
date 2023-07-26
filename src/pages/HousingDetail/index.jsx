import React from 'react';
import { useParams } from 'react-router-dom';
import housingData from '../../data/logements.json';
import Carousel from '../../components/Carousel';  

const HousingDetail = () => {
  const { id } = useParams();
  const housing = housingData.find(housing => housing.id === id);

  // handle case where housing with id does not exist
  if (!housing) {
    return <p>Housing not found</p>;
  }

  return (
    <div>
      
      <Carousel images={housing.pictures} />

    </div>
  );
};

export default HousingDetail;
