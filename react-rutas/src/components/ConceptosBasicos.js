import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos basicos</h2>
      {/** Si no se le agrega la propiedad EXACT, las rutas deben ser escritas de lo más particular a lo más general,
       * ya que si ponemos / hasta arriba, entonces es la que siempre va a estar cargando,
       * no importanto si escribimos /acerca, debido a que todas inician con /
       */}
      <Router>
        <Switch>
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenido al tema de rutas en react</p>
          </Route>
          <Route exact path="/acerca">
            <h3>Acerca</h3>
          </Route>
          <Route exact path="/contacto">
            <h3>Contacto</h3>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;
