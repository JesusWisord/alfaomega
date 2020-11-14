import React from 'react';
import styles from './styles/AcercaDe.module.css';

const AcercaDe = () => (
  <div className={styles.acercaDe} id="Acerca">
    <div className={styles.somos}>
      <h1 id="Acerca">¿Quiénes Somos?</h1>
      <p>
        Con 17 años de experiencia en el mercado, en MAQUINARIA ALFA &
        OMEGA tenemos la confianza de saber que somos la empresa Mexicana
        dedicada a la compra-venta de maquinaria industrial usada que brinda
        la mejor calidad, servicio y atención a nuestros clientes.
      </p>
      <p>
        Contamos con un amplio inventario, enfocado
        principalmente en el área de la construcción.
        Algunos de nuestros equipos más comunes son: compactadores,
        grúas articuladas, retroexcavadoras, montacargas, revolvedoras,
        remolques, soldadoras y mucha más variedad.
      </p>
    </div>
    <div className={styles.nosotros}>
      <h1 id="Eleccion">¿Porqué Nosotros?</h1>
      <p>
        Contamos con un gran inventario y variedad de marcas disponible para entrega inmediata.
      </p>
      <p>
        Manejamos los mejores equipos al mejor precio y tipo de cambio en el mercado.
      </p>
      <p>
        Tenemos la experiencia en compra-venta, servicio y manejo de maquinaria industrial.
      </p>
      <p>
        Garantizamos confianza y trabajo con ética profesional.
      </p>
    </div>
  </div>
);

export default AcercaDe;
