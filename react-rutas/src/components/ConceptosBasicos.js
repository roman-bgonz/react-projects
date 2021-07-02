import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';
function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos basicos</h2>
      {/** Si no se le agrega la propiedad EXACT, las rutas deben ser escritas de lo más particular a lo más general,
       * ya que si ponemos / hasta arriba, entonces es la que siempre va a estar cargando,
       * no importanto si escribimos /acerca, debido a que todas inician con /
       */}
      {/* Cuando tenemos rutas que van a generar rutas anidas didamicamente, no combiene tener el atributo exact */}
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" children={<Acerca />} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/usuario/:username" component={Usuario} />
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;
