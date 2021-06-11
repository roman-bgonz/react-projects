import React, { useState } from 'react';
import CrudForm from '../shared/CrudForm';
import CrudTable from '../shared/CrudTable';

const CrudApi = () => {
  const [db, setDb] = useState([]);

  // Variable de estado
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    //Se combina lo que ya está en el arreglo con lo nuevo
    setDb([...db, data]);
  };

  const updateData = (data) => {
    /**
     * Si el id del arreglo es el mismo de la data que se recibe, entonces data
     * reemplazará el objeto en esa posición, de lo contrario se que el objeto como es
     */
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id: ${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <b>CRUD Api</b>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApi;
