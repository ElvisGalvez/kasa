import React from 'react';
import { useParams } from 'react-router-dom';
import housingData from '../../data/logements.json';
import Carousel from '../../components/Carousel';
import Accordion from '../../components/Accordion';
import './HousingDetail.css';  

const HousingDetail = () => {
  const { id } = useParams();
  const housing = housingData.find(housing => housing.id === id);

  // Gérer le cas où le logement avec l'id n'existe pas
  if (!housing) {
    return <p>Logement non trouvé</p>;
  }

  const hostName = housing.host.name.split(' ');

  const rating = parseInt(housing.rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? 'fa-star full-star' : 'fa-star empty-star');
  }

  return (
    <div>
      <Carousel images={housing.pictures} />

      <div className="title-host-container">
        <div>
          <h1 className="housing-title">{housing.title}</h1>
          <p className="housing-location">{housing.location}</p>
          
          <div className="tags-container">
            {housing.tags.map((tag, index) => (
              <p key={index} className="tag">{tag}</p>
            ))}
          </div>
        </div>

        <div className="host-container">
          <div className="host">
            <div className="host-name">
              <p>{hostName[0]}</p>
              <p>{hostName[1]}</p>
            </div>
            <img src={housing.host.picture} alt={`Host ${housing.host.name}`} className="host-picture" />
          </div>
          <div className="rating">
            {stars.map((star, index) => (
              <i key={index} className={`fas ${star}`}></i>
            ))}
          </div>
        </div>
      </div>

      <div className="accordion-container">
    <Accordion 
        title="Description"
        content={housing.description}
        customClass="accordion--housePage"
    />
    <Accordion 
        title="Équipements"
        content={housing.equipments.map((e, index) => <p key={`${e}-${index}`}>{e}</p>)}
        customClass="accordion--housePage"
    />
</div>



        </div>
      
  );
};

export default HousingDetail;
