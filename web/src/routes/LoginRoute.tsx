import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import {useAuth} from '../hooks/AuthContext';

const LoginRoute: React.FC<RouteProps> = (props) => {
  const {user} = useAuth();
  return user ? <Redirect to="/" /> : <Route {...props} />
}

export default LoginRoute;