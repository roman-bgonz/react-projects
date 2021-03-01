import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useEffect, useState } from 'react';

function App() {
  const urlBase = "https://localhost:44398/api/gestores";
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [gestorSeleccionado, setGestorSeleccionado] = useState({
    id: '',
    nombre: '',
    lanzamiento: '',
    desarrollador: ''
  });

  // Captura lo que el usuario digita en los inputs y se guarda en el estado, esto en base al atributo name del input
  // asi que el nombre del input debe coincidir con el nombre del estado
  const handleChange = e => {
    const { name, value } = e.target;
    setGestorSeleccionado({
      ...gestorSeleccionado,
      [name]: value
    });
    console.log(gestorSeleccionado)
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  }

  const peticionGet = async () => {
    await axios.get(urlBase).then(response => {
      console.log(JSON.stringify(response));
      setData(response.data);
    }).catch(err => {
      console.error(err);
    });
  };

  const peticionPost = async () => {
    // Eliminamos el atributo ya que la BD lo genera de forma autoincrementable
    delete gestorSeleccionado.id;
    gestorSeleccionado.lanzamiento = parseInt(gestorSeleccionado.lanzamiento);
    // Le pasamos la url y el gestor seleccionado que es lo que el usuario escribe en los inputs
    await axios.post(urlBase, gestorSeleccionado).then(response => {
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(err => {
      console.error(err);
    });
  };

  const peticionPut = async () => {
    gestorSeleccionado.lanzamiento = parseInt(gestorSeleccionado.lanzamiento);
    // Le pasamos la url y el gestor seleccionado que es lo que el usuario escribe en los inputs
    await axios.put(urlBase + "/" + gestorSeleccionado.id, gestorSeleccionado).then(response => {
      // almacenamos en una variable lo que nos regresa la api
      var respuesta = response.data;
      //almacenamos la data en una variable auxiliar
      var dataAuxiliar = data;
      dataAuxiliar.map(gestor => {
        if (gestor.id === gestorSeleccionado.id) {
          gestor.nombre = respuesta.nombre;
          gestor.lanzamiento = respuesta.lanzamiento;
          gestor.desarrollador = respuesta.desarrollador;
        }
      });

      abrirCerrarModalEditar();
    }).catch(err => {
      console.error(err);
    });
  };

  const peticionDelete = async () => {
    await axios.delete(urlBase + "/" + gestorSeleccionado.id).then(response => {
      // hacemos un filtro de la data eliminando el registro que coincida con el ID que retorna el API
      setData(data.filter(gestor => gestor.id !== response.data));
      abrirCerrarModalEliminar();
    }).catch(err => {
      console.error(err);
    });
  };

  const seleccionarGestor = (gestor, caso) => {
    setGestorSeleccionado(gestor);
    (caso === "Editar") ? abrirCerrarModalEditar() : abrirCerrarModalEliminar();
  };

  useEffect(() => {
    peticionGet();
  }, [])

  return (
    <div className="App row">
      <div className="container">
        <br /><br />
        <button className="btn btn-success" onClick={() => abrirCerrarModalInsertar()}>Insertar nuevo DBMS</button>
        <br /><br />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Lanzamiento</th>
              <th>Desarrollador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(gestor => (
                <tr key={gestor.id}>
                  <td>{gestor.id}</td>
                  <td>{gestor.nombre}</td>
                  <td>{gestor.lanzamiento}</td>
                  <td>{gestor.desarrollador}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => seleccionarGestor(gestor, "Editar")}>Editar</button> {" "}
                    <button className="btn btn-danger" onClick={() => seleccionarGestor(gestor, "Eliminar")}>Eliminar</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <Modal isOpen={modalInsertar}>
          <ModalHeader>Insertar DBMS</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={handleChange} />
              <br />
              <label>Lanzamiento: </label>
              <br />
              <input type="text" className="form-control" name="lanzamiento" onChange={handleChange} />
              <br />
              <label>Desarrollador: </label>
              <br />
              <input type="text" className="form-control" name="desarrollador" onChange={handleChange} />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPost()}>Insertar</button> {" "}
            <button className="btn btn-default" onClick={() => abrirCerrarModalInsertar()}>Cancelar</button>
          </ModalFooter>
        </Modal>


        <Modal isOpen={modalEditar}>
          <ModalHeader>Editar DBMS</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>ID: </label>
              <br />
              
              <input type="text" className="form-control" name="nombre" readOnly value={ gestorSeleccionado && gestorSeleccionado.id} />
              <br />
              <label>Nombre: </label>
              <br />
              <input type="text" className="form-control" name="nombre" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.nombre} />
              <br />
              <label>Lanzamiento: </label>
              <br />
              <input type="text" className="form-control" name="lanzamiento" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.lanzamiento} />
              <br />
              <label>Desarrollador: </label>
              <br />
              <input type="text" className="form-control" name="desarrollador" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.desarrollador} />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => peticionPut()}>Editar</button> {" "}
            <button className="btn btn-default" onClick={() => abrirCerrarModalEditar()}>Cancelar</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEliminar}>
          <ModalBody>
            ¿Estás seguro que deseas eliminar el DBMS {gestorSeleccionado && gestorSeleccionado.nombre}?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={() => peticionDelete() }> Si</button>
            <button className="btn btn-secondary"  onClick={() => abrirCerrarModalEliminar()}>No</button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default App;
