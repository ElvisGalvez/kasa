import React from 'react';
import Banner from '../../components/Banner';
import HousingCardList from '../../components/HousingCardList';
import bannerImage from '../../assets/images/landscape.png'; 

function Home() {
  return (
    <div>
      <Banner 
        image={bannerImage} 
        title="Chez vous, partout et ailleurs" 
      />
      <HousingCardList />
    </div>
  );
}

export default Home;
