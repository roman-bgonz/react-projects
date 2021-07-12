import { createContext, useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
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
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        /**
         * Si el id del arreglo es el mismo de la data que se recibe, entonces data
         * reemplazará el objeto en esa posición, de lo contrario se que el objeto como es
         */
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError();
      } else {
        setDb(null);
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id: ${id}?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { 'content-type': 'application/json' },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
          setError();
        } else {
          setDb(null);
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
    deleteData,
    loading,
    error,
    db,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
