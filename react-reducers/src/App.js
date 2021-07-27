import './App.css';
import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import ShoppingCart from './components/ShoppingCart';
import CrudApi from './crud-api/CrudApi';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ul>
        - Reducer es muy parecido a Redux pero esta ya viene incluida en el
        proyecto = Reducer:
        <li>Función reductora</li>
        <li>
          Devuelve un valor y todo la lógica de la función es capaz de resolver
          un solo procesamiento sin afectar elementos externos
        </li>
        <li>
          Siempre retornan un valor que se considera el estdo de la aplicación
        </li>
        <li>No podemos usar useEffect dentro de funciones reductoras</li>
        <li>No podemos realizar peticiones adíncronas.</li>
        <li>Usarlo cuando la app ya tiene una mediana complejidad</li>
      </ul>
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
