import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {useAuth} from '../hooks/AuthContext';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const {user} = useAuth();
  return user ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;