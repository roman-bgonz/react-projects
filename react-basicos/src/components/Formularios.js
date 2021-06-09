import React, { useState } from 'react';

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    /**
     * Es importante que los elementos del formulario tengan el atributo name, por que lo que se hace es lo siguiente:
     * - Lo que ya traiga la variable de estado del formulario (form) - [se utiliza el spread operator para hacer una mezcla
     * con lo que ya tiene el formulario]
     * e.target elemento que originó el evento, y se actualiza el valor del target name con el valor del targer value
     */
    setForm({
      ...form,
      [e.target.name]: e.target.value, //Agrega como key el nombre del campo y como valor su value
    });
  };

  const handlehecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

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
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <br />

        <p>Elige tu Sabor JS Favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>

        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        <br />
        <p>Elige tu lenguage de programación</p>
        <select name="lenguage" id="" onChange={handleChange} defaultValue="">
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
          onChange={handlehecked}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

// export default function Formularios() {
//     const [nombre, setNombre] = useState('');
//     const [sabor, setSabor] = useState('');
//     const [lenguage, setLenguage] = useState('');
//     const [terminos, setTerminos] = useState(false);
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       alert('Holi');
//     };

//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="nombre">Nombre</label>
//           <input
//             type="text"
//             id="nombre"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//           <br />

//           <p>Elige tu Sabor JS Favorito</p>
//           <input
//             type="radio"
//             id="vanilla"
//             name="sabor"
//             value="vanilla"
//             onChange={(e) => setSabor(e.target.value)}
//             defaultChecked
//           />
//           <label htmlFor="vanilla">Vanilla</label>

//           <input
//             type="radio"
//             id="react"
//             name="sabor"
//             value="react"
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="react">React</label>

//           <input
//             type="radio"
//             id="svelte"
//             name="sabor"
//             value="svelte"
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="svelte">Svelte</label>

//           <input
//             type="radio"
//             id="angular"
//             name="sabor"
//             value="angular"
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="angular">Angular</label>

//           <input
//             type="radio"
//             id="vue"
//             name="sabor"
//             value="vue"
//             onChange={(e) => setSabor(e.target.value)}
//           />
//           <label htmlFor="vue">Vue</label>

//           <br />
//           <p>Elige tu lenguage de programación</p>
//           <select
//             name="lenguage"
//             id=""
//             onChange={(e) => setLenguage(e.target.value)}
//             defaultValue=""
//           >
//             <option value="">---</option>
//             <option value="js">JS</option>
//             <option value="php">PHP</option>
//             <option value="py">Python</option>
//             <option value="go">Go</option>
//             <option value="rb">Ruby</option>
//           </select>

//           <br />
//           <label htmlFor="terminos">Acepto terminos y condiciones</label>
//           <input
//             type="checkbox"
//             id="terminos"
//             name="terminos"
//             onChange={(e) => setTerminos(e.target.checked)}
//           />
//           <button type="submit">Enviar</button>
//         </form>
//       </>
//     );
//   }
