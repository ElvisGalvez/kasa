import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import './Header.css';

const Header = () => (
  <header className="header">
    <Logo />
    <nav>
      <ul className="navbar">
        <li><NavLink exact to="/" activeClassName="active">Accueil</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">À Propos</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;