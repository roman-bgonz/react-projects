import React, { memo } from 'react';

const ContadorHijo = () => {
  {
    /* El coomponente hijo se renderiza cada vez que se le da click a los botones del padre */
  }
  console.log('Hijo contador se renderiza');
  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Hijo del contador</h2>
    </div>
  );
};

export default memo(ContadorHijo);
