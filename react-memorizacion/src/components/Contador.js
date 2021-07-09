import React, { useCallback, useState } from 'react';
import ContadorHijo from './ContadorHijo';
const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState('');
  //const sumar = () => setContador(contador + 1);
  const sumar = useCallback(() => setContador(contador + 1), [contador]);

  //const restar = () => setContador(contador - 1);
  const restar = useCallback(() => setContador(contador - 1), [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Teoria</h2>
      <h3>Memo</h3>
      <ul>
        <li>Se encarga de memorizar un componente por completo</li>
        <li>
          Lo vuelve a memorizar al momento de que sus <b>props</b> cambien
        </li>
        <li>Evita re-renderizados</li>
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
      <br />
      <h3>useCallback</h3>
      <ul>
        <li>Memoriza una función, para no volverla a definir en cada render</li>
        <li>
          Usarlo simpre que se pase una función como <b>prop</b> a un componente
          memorizada
        </li>
        <li>
          Usarlo siempre que se pase una función como parámetro de un efecto
        </li>
      </ul>
      <h3>useMemo</h3>
      <ul>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una función
        </li>
        <li>Genera propiedades computadas</li>
        <li>Usarlo en procesis pesados</li>
      </ul>
      <hr />
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
