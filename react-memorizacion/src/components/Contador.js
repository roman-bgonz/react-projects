import React, { useState } from 'react';
import ContadorHijo from './ContadorHijo';
const Contador = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Teoria</h2>
      <ul>
        <li>Se encarga de memorizar un componente por completo</li>
        <li>
          Lo vuelve a memorizar al momento de que sus <b>props</b> cambien
        </li>
        <li>Eita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible, pues podria ser más
          costosa la tarea de memorización que el re-rendeizado del componente
        </li>
        <li>
          Usalo cuando
          <ul>
            <li>Tenemo muchos elementos renderizados en una lista</li>
            <li>Llamamos datos de APIS</li>
            <li>Un componente se vuelve muy pesado</li>
            <li>Salen alertas de rendimiento en la consola</li>
          </ul>
        </li>
      </ul>
      <hr />
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <ContadorHijo />
    </div>
  );
};

export default Contador;
