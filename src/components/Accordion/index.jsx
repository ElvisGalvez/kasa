import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, content, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-wrapper ${customClass}`}>
      <button 
        className="accordion-button" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}  
      >
        {title}
        <span className="accordion-icon">
          {isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
        </span>
      </button>

      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
