import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

const LoginRoute: React.FC<RouteProps> = (props) => {
  const isLogged = !!localStorage.getItem('proffy-token');
  return isLogged ? <Redirect to="/" /> : <Route {...props} />
}

export default LoginRoute;