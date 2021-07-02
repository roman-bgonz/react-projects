import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Acerca from '../pages/Acerca';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import MenuConceptos from './MenuConceptos';
function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos basicos</h2>
      {/** Si no se le agrega la propiedad EXACT, las rutas deben ser escritas de lo más particular a lo más general,
       * ya que si ponemos / hasta arriba, entonces es la que siempre va a estar cargando,
       * no importanto si escribimos /acerca, debido a que todas inician con /
       */}
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" children={<Acerca />} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;
