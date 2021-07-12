import React, { useState } from 'react';

const Contador = () => {
  const [contador, setCount] = useState(0);
  const sumar = () => {
    setCount(contador + 1);
  };
  const restar = () => {
    setCount(contador - 1);
  };
  return (
    <div>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
    </div>
  );
};

export default Contador;
