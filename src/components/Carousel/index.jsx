import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);  

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);  
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);  
  };

  return (
    <div className="carousel-container">
      {images.length > 1 && (
        <button onClick={prevImage} className="carousel-button prev" aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      {images.length > 1 && (
        <button onClick={nextImage} className="carousel-button next" aria-label="Next slide">
          <i className="fas fa-chevron-right"></i>
        </button>
      )}
      {images.length > 1 && (
        <div className="carousel-position">
          <p>{currentIndex + 1}/{images.length}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
