export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export enum OfferPlace {
  City = 'cities',
  Favorite = 'favorites',
  NearPlace = 'near-places'
}

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const STARS_COUNT = 5;
