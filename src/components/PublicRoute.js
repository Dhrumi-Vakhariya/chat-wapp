import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...routerProps }) => {
  const profile = false;

  if (profile) {
    return <Redirect to="/" />;
  }
  return <Route {...routerProps}>{children}</Route>;
};

export default PublicRoute;
