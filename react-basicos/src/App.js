import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <hr class="hr-text" data-content="Componente" />
        <Componente msg="Hola soy un componente desde las props" />

        <hr class="hr-text" data-content="Propiedades" />
        <Propiedades
          cadena="Es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Ro", correo: "rba@gmail.com" }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento react</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como props" />
          }
        />

        <hr class="hr-text" data-content="Estado" />
        <Estado />
      </header>
    </div>
  );
}

export default App;
