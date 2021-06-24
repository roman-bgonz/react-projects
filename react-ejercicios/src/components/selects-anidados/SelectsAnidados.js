import SelectList from './SelectList';
import React, { useState } from 'react';

const SelectsAnidados = () => {
  // Variables de estado
  const [state, setState] = useState('');
  const [town, setTown] = useState('');
  const [suburb, setSuburb] = useState('');

  const TOKEN = 'd81a7ac7-976d-4e1e-b7d3-b1979d791b6c';

  return (
    <div>
      <h2>Select anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => {
          setState(e.targe.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url={`"https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => {
            setTown(e.targe.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
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
