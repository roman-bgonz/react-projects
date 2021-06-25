import React from 'react';
import SongSearch from './components/buscador-canciones/SongSearch';
import ContactForm from './components/formulario/ContactForm';
import CrudApi from './components/json-server/CrudApi';
import CrudApp from './components/local/CrudApp';
import Modals from './components/modals/Modals';
import SelectsAnidados from './components/selects-anidados/SelectsAnidados';
// Curso https://www.youtube.com/watch?v=b-PcWvzf9Xs&list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk&index=28
function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
