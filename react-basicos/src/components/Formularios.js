import React, { useState } from 'react';

export default function Formularios() {
  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('');
  const [lenguage, setLenguage] = useState('');
  const [terminos, setTerminos] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Holi');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />

        <p>Elige tu Sabor JS Favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="svelte">Svelte</label>

        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="vue">Vue</label>

        <br />
        <p>Elige tu lenguage de programación</p>
        <select
          name="lenguage"
          id=""
          onChange={(e) => setLenguage(e.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JS</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>

        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
