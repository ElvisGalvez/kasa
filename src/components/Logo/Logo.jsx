import React from 'react';
import PropTypes from 'prop-types';
import logoSalmon from '../../assets/Logos/logoSalmon.svg';
import logoWhite from '../../assets/Logos/logoWhite.svg';

const Logo = ({ color }) => {
  const logo = color === 'white' ? logoWhite : logoSalmon;
  return (
    <div className="logo-container">
      <img src={logo} alt="Kasa logo" className="logo" />
    </div>
  );
}

Logo.propTypes = {
  color: PropTypes.oneOf(['white', 'salmon']),
};

export default Logo;
