import React from 'react';
import './styles/NavBar.css';

const NavBar = () => {
  
  const brand =
    'https://upload.wikimedia.org/wikipedia/commons/2/28/Supreme_Logo.svg';

  return (
    <header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
        <img src={brand} alt="logo" />
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* selector de lenguaje */}
      <select className="select-language">
        <option value="" selected disabled>
          Language
        </option>
        <option value="">Español</option>
        <option value="">日本語</option>
      </select>
    </header>
  );
};

export default NavBar;
