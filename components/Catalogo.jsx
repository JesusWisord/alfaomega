import React from 'react';
import styles from './styles/Catalogo.module.css';
import productArray from '../json/catalogo.json';

const Catalogo = () => {
  console.log(productArray);
  return (
    <div className={styles.catalogo}>
      {
        productArray.map((product) => (
          <div className={styles.producto}>
            <div className={styles.imgContainer}>
              <img src={`/catalogo/${product.image}`} alt="Imagen de producto" />
            </div>
            <p>{product.name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Catalogo;