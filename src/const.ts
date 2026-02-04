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

export enum BookmarkPlace {
  PlaceCard = 'place-card',
  Offer = 'offer'
}

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const STARS_COUNT = 5;

export const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'] as const;

export const CommentLength = {
  Min: 50,
  Max: 300
} as const;
