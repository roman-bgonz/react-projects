import SelectList from './SelectList';
import React, { useState } from 'react';

const SelectsAnidados = () => {
  // Variables de estado
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  return (
    <div>
      <h2>Select anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url=""
        handleChange={(e) => {
          setState(e.targe.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url=""
          handleChange={(e) => {
            setTown(e.targe.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonias"
          url=""
          handleChange={(e) => {
            setSuburb(e.targe.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
