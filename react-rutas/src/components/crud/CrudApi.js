import React, { useState, useEffect } from 'react';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import Error404 from '../../pages/Error404';
import Loader from '../shared/Loader';
import Message from '../shared/Message';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

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

  return (
    <div>
      <HashRouter basename="santos">
        <header>
          <h2>CRUD API con Rutas</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              Santos
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
              Agregar
            </NavLink>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <article className="grid-1-2">
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
          </Route>
          <Route exact path="/agregar">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route exact path="/editar/:id">
            <CrudForm
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            />
          </Route>
          <Route path="*" children={Error404} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
