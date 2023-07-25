import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-wrapper">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: isOpen ? '10px 10px 0 0' : '10px' }}
      >
        {title}
        <span className="accordion-icon">
          {isOpen ? 'ˇ' : '^'}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
