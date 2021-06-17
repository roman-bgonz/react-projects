import React from 'react';
import SongSearch from './components/buscador-canciones/SongSearch';
import CrudApi from './components/json-server/CrudApi';
import CrudApp from './components/local/CrudApp';
// Curso https://www.youtube.com/watch?v=b-PcWvzf9Xs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=28
function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
