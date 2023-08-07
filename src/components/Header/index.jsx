import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  const location = useLocation();

  let headerClass = 'header';
  if (location.pathname === '/') {
    headerClass += ' header-home';
  } else if (location.pathname.startsWith('/housing')) {
    headerClass += ' header-housing';
  } else if (location.pathname === '/about') {
    headerClass += ' header-about';
  }

  return (
    <header className={headerClass}>
      <Logo styleClass="logo-container-header" />
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={location.pathname === "/about" ? "active" : ""}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
