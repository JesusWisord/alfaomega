import React from 'react';
import styles from './styles/AcercaDe.module.css';

const AcercaDe = () => (
  <div className={styles.acercaDe} id="Acerca">
    <div className={styles.somos}>
      <h1>¿Quiénes Somos?</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Maiores, non tempora, animi repellendus nulla facere tempore
        officiis ut et, commodi illum error quisquam sed quibusdam
        maxime minima exercitationem cumque explicabo?
      </p>
    </div>
    <div className={styles.nosotros}>
      <h1>¿Porqué Nosotros?</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Maiores, non tempora, animi repellendus nulla facere tempore
        officiis ut et, commodi illum error quisquam sed quibusdam
        maxime minima exercitationem cumque explicabo?
      </p>
    </div>
  </div>
);

export default AcercaDe;
