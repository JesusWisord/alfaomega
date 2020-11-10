import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import styles from './styles/Header.module.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="header--right">
        <img
          src="/logo.jpg"
          alt="logo alfa omega"
          className={styles.logo}
        />
      </div>
      <div className={styles.header__left}>
        <FiMenu className={styles.icon} onClick={() => setMenu(!menu)} />
        <nav className={styles.menu} style={menu ? { display: 'none' } : { display: 'initial' }}>
          <ul>
            <li><a href="#Catalogo">Gama de Productos</a></li>
            <li><a href="#Acerca">¿Quiénes somos?</a></li>
            <li><a href="#Eleccion">¿Porqué elegirnos</a></li>
            <li><a href="#Contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;