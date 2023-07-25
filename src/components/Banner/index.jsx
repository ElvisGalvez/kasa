import React from 'react';
import './Banner.css';

const Banner = ({ image, title }) => (
  <div className="banner">
    <img src={image} alt="" className="banner-image"/>
    {title && <h1 className="banner-text">{title}</h1>}
  </div>
);

export default Banner;