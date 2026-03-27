export const BASE_URL = 'https://16.design.htmlacademy.pro/six-cities';

export const REQUEST_TIMEOUT = 5000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum RequestStatus {
  Error = 'Error',
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success'
}

export enum FavoriteStatus {
  On = 1,
  Off = 0
}
