import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
  Link,
} from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Dashboard from '../pages/Dashboard';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';
import Usuario from '../pages/Usuario';
import MenuConceptos from './MenuConceptos';
import PrivateRoute from './PrivateRoute';
function ConceptosBasicos() {
  return (
    <div>
      <h2>Hash Router</h2>
      <HashRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" children={<Acerca />} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </HashRouter>
      <hr />
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
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route path="/react" component={ReactTopics} />
          <Route exact path="/login" component={Login} />
          {/*<Route exact path="/dashboard" component={Dashboard} />*/}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;
