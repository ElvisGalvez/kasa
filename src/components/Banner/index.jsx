import React from 'react';
import './Banner.css';

const Banner = ({ image, title, isAboutPage }) => (
  <div className={`banner ${isAboutPage ? 'banner-about' : ''}`}>
    <img src={image} alt="" className="banner-image"/>
    {title && <h1 className="banner-text">{title.replace(', ', ',\n')}</h1>}
  </div>
);

export default Banner;