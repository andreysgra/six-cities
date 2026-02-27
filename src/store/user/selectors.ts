import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {AuthorizationStatus} from '../../services/api/const';

export const getAuthorizationStatus = (state: State) => state[StoreSlice.User].authorizationStatus;

export const getIsAuthorized = (state: State): boolean =>
  state[StoreSlice.User].authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: State) => state[StoreSlice.User].user;
