import {AppRoute, AuthorizationStatus} from '../../const';
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: React.JSX.Element;
  restrictedFor: AuthorizationStatus;
  redirectedTo: AppRoute;
}

function PrivateRoute({children, restrictedFor, redirectedTo}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authorizationStatus !== restrictedFor ? children : <Navigate to={redirectedTo} />
  );
}

export default PrivateRoute;
