import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      {/* React nos dice que hay que tratar esto de la memorización con cautela, ya que
      consiste en cachear componentes y funciones, para que cuando se esté renderizando un componente
      por el paso de propiedades o por el cambio de su estado, pero que intenamente tenga
      otros componentes que no se modificaron, que esos permanezcan en caché */}
      <h1>Memorización en React</h1>
      <hr />
      <h2>Teoria</h2>
      <Contador />
    </div>
  );
}

export default App;
