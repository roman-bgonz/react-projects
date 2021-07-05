import React from 'react';
import { Redirect, Route } from 'react-router';

/*const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
};*/

/*const PrivateRoute = (props) => {
  return <Route {...props} />;
};*/

//Simular autenticación
let authenticated = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {authenticated ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
