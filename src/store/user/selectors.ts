import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {AuthorizationStatus} from '../../services/api/const';

const storeSlice = StoreSlice.User;

export const getAuthorizationStatus = (state: State) =>
  state[storeSlice].authorizationStatus;

export const getIsAuthorized = (state: State): boolean =>
  state[storeSlice].authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: State) => state[storeSlice].user;
