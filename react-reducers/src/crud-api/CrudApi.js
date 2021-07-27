import React, { useState, useEffect, useReducer } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { crudInitialState, crudReducer } from '../reducers/crudReducer';
import { TYPES } from '../actions/crudActions';

const CrudApi = () => {
  //const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;

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
          //setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError();
        } else {
          //setDb(null);
          dispatch({ type: TYPES.NO_DATA });
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
        //setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
        setError();
      } else {
        //setDb(null);
        dispatch({ type: TYPES.NO_DATA });
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
        //setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
        setError();
      } else {
        //setDb(null);
        dispatch({ type: TYPES.NO_DATA });
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
        // console.log(res);
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
          //setDb(newData);
          setError();
        } else {
          //setDb(null);
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
      });
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
