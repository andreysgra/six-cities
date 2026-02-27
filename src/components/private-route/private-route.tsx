import {AppRoute} from '../../const';
import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {AuthorizationStatus} from '../../services/api/const';
import {getAuthorizationStatus} from '../../store/user/selectors';

type PrivateRouteProps = {
  children: React.JSX.Element;
  restrictedFor: AuthorizationStatus;
  redirectedTo: AppRoute;
}

function PrivateRoute({children, restrictedFor, redirectedTo}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus !== restrictedFor ? children : <Navigate to={redirectedTo} />
  );
}

export default PrivateRoute;
