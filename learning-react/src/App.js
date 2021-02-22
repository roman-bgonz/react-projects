import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import PrimerComponente from './components/PrimerComponente'

function holaMundo(nombre, edad) {
  var saludo = (<div>
    <h2>Hola, soy {nombre}</h2>
    <h4>Y tengo { edad} años</h4>

  </div>);
  return saludo;
}

function App() {
  var nombre = "Román";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {holaMundo(nombre, 25)}

        <section className="componentes">
          <PrimerComponente></PrimerComponente>
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      
    </div>
  );
}

export default App;
