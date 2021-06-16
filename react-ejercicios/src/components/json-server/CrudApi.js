import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';
import CrudForm from '../shared/CrudForm';
import CrudTable from '../shared/CrudTable';

const CrudApi = () => {
  const [db, setDb] = useState(null);

  // Variable de estado
  const [dataToEdit, setDataToEdit] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = 'http://localhost:5000/santos';

  // ComponentDidMount
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb(res);
          setError();
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        //Se combina lo que ya está en el arreglo con lo nuevo
        setDb([...db, res]);
        setError();
      } else {
        setDb(null);
        setError(res);
      }
    });
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
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
