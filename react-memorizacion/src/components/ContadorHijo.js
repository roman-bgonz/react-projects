import React, { memo, useMemo } from 'react';

const ContadorHijo = ({ contador, sumar, restar }) => {
  /*let superNumero = 0;

  for (let i = 0; i < 10000000; i++) {
    superNumero++;
  }*/

  // Memoriza el resultado un valor calculado
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);

  /* El componente hijo se renderiza cada vez que se le da click a los botones del padre */

  console.log('Hijo contador se renderiza');
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Hijo del contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
