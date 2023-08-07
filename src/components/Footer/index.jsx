import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <Logo color="white" styleClass="logo-container-footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
