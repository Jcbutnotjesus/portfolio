import React from 'react';
import './header.css';
import { FacebookOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-section logo">Mon Portfolio</div>
      <nav className="header-section nav">
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-section social">
        <FacebookOutlined style={{ fontSize: '24px', color: '#333' }} />
      </div>
    </header>
  );
};

export default Header;
