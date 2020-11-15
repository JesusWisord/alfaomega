import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import styles from './styles/Catalogo.module.css';
import productArray from '../json/catalogo.json';

const Catalogo = () => {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState(null);
  console.log(product);
  return (
    <>
      <h1 className={styles.title} id="Catalogo">Catálogo</h1>
      <div className={styles.catalogo}>
        {
          productArray.map((productItem) => (
            <button
              className={styles.producto}
              key={productItem.code}
              type="button"
              onClick={() => { setModal(true); setProduct(productItem); }}
            >
              <div className={styles.imgContainer}>
                <img src={`/catalogo/${productItem.image}`} alt="Imagen de producto" />
              </div>
              <p>{productItem.name}</p>
            </button>
          ))
        }
      </div>
      {modal ? (
        <div className={styles.modal}>
          <div className={styles.upper_modal}>
            <h1>{product.name}</h1>
            <button type="button" onClick={() => setModal(false)}>X</button>
          </div>
          <div className={styles.modal_imgContainer}>
            <img src={`/catalogo/${product.image}`} alt="" />
          </div>
          <div className={styles.modal_data}>
            <p>
              Modelo:
              {' '}
              {product.model}
            </p>
            <p>
              Precio:
              {' '}
              <CurrencyFormat
                value={product.price}
                displayType="text"
                thousandSeparator
                prefix="$"
              />
              {' '}
              MXN
            </p>
            <p>
              Código:
              {' '}
              {product.code}
            </p>
            <p className={styles.product_description}>
              Descripción:
              {' '}
              {product.description}
            </p>
          </div>
        </div>
      )
        : ''}
    </>
  );
};

export default Catalogo;
