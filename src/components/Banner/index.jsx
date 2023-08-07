import React from 'react';
import './Banner.css';

const Banner = ({ image, title, isAboutPage, isHomePage }) => (
  <div className={`banner ${isAboutPage ? 'banner-about' : ''} ${isHomePage ? 'banner-home' : ''}`}>
    <img src={image} alt="" className="banner-image"/>
    {title && <h1 className="banner-text">{title.replace(', ', ',\n')}</h1>}
  </div>
);

export default Banner;
