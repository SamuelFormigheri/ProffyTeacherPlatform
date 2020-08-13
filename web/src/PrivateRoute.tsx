import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isLogged = !!localStorage.getItem('proffy-token');
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;