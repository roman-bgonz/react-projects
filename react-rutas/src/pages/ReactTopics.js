import React from 'react';
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita
        molestiae molestias illo, quos voluptates ipsum! Minus eum dolorum nemo,
        sed beatae nostrum similique perferendis ab voluptatibus incidunt
        voluptates adipisci?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  /**
   * La propiedad path del useRouteMatch nos va a ayudar a construir rutas relativas: ej -> /acerca Usar en route
   * La propiedad url nos va a ayudar a crear enlaces relativos Link o NavLink
   *
   */
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          Elige un tema de react
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium, enim, illo est quis repellat nemo iste sit cupiditate
            incidunt laudantium, et in dolorem quisquam neque officiis? Vero,
            culpa repudiandae.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
