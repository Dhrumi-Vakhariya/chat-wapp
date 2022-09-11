import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...routerProps }) => {
  const profile = false;

  if (!profile) {
    return <Redirect to="/signin" />;
  }
  return <Route {...routerProps}>{children}</Route>;
};

export default PrivateRoute;
