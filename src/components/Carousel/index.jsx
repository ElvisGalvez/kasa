import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const nextImage = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex(nextIndex);
    setNextIndex((nextIndex + 1) % images.length);
  };

  const prevImage = () => {
    setNextIndex(currentIndex);
    setCurrentIndex(prevIndex);
    setPrevIndex((prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      {images.length > 1 && (
        <button onClick={prevImage} className="carousel-button prev" aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </button>
      )}
      {images.map((image, index) => (
        <img 
          src={image} 
          alt={`Slide ${index + 1}`}
          className={`
            carousel-image 
            ${index === currentIndex ? 'active' : ''}
            ${index === prevIndex ? 'prev' : ''}
            ${index === nextIndex ? 'next' : ''}
          `} 
        />
      ))}
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

