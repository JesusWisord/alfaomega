import React from 'react';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
import styles from './styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer} id="Contacto">
    <div className="right">
      <p className={styles.subtitle}>Constructora Alfa Omega</p>
      <a href="#Somos" className={styles.link}>¿Quiénes Somos?</a>
    </div>
    <div className={styles.left}>
      <p className={styles.subtitle}>Síguenos en Redes</p>
      <div className={styles.social_media}>
        <a href="www.facebook.com">
          <GrFacebook className={styles.icon} />
        </a>
        <a href="www.instagram.com">
          <GrInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
