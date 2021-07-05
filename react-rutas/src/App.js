import './App.css';
import SongSearch from './components/buscador-canciones/SongSearch';
import ConceptosBasicos from './components/ConceptosBasicos';
import CrudApi from './components/crud/CrudApi';

function App() {
  return (
    <div>
      <h1>React router</h1>
      {/* <SongSearch /> */}
      <hr />
      <CrudApi />
      <hr />
      {/* <ConceptosBasicos /> */}
    </div>
  );
}

export default App;
