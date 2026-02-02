import {AppRoute, AuthorizationStatus} from '../../const';
import React from 'react';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.JSX.Element;
  restrictedFor: AuthorizationStatus;
  redirectedTo: AppRoute;
}

function PrivateRoute({authorizationStatus, children, restrictedFor, redirectedTo}: PrivateRouteProps) {
  return (
    authorizationStatus !== restrictedFor ? children : <Navigate to={redirectedTo} />
  );
}

export default PrivateRoute;
