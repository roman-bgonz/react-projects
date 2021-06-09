import React from 'react';
import './Estilos.css';
import moduleStyles from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos() {
  let myStyles = {
    borderRadius: '.5rem',
    margin: '1rem auto',
    maxWidth: '50%',
  };
  return (
    <section className="estilos">
      <h3 className="bg-react">Estilos en hoja CSS3 externa</h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en línea
      </h3>
      <h3 className="bg-react">
        Agregando normalize
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyles.error}>Estilos con módulos</h3>
      <h3 className={moduleStyles.success}>Estilos con módulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
