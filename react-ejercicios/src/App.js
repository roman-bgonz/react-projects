import React from 'react';
import CrudApi from './components/json-server/CrudApi';
import CrudApp from './components/local/CrudApp';
// Curso https://www.youtube.com/watch?v=b-PcWvzf9Xs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=28
function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
