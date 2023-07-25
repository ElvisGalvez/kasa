import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Logo />
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
