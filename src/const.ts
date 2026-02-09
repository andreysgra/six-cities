import {TCity} from './types/city';

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

export enum MapPlace {
  City = 'cities',
  Offer = 'property'
}

export const Cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const STARS_COUNT = 5;

export const RATINGS = ['perfect', 'good', 'not bad', 'badly', 'terribly'] as const;

export const CommentLength = {
  Min: 50,
  Max: 300
} as const;

export const MAX_REVIEWS_COUNT = 10;

export const MAP_TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> ' +
  'contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const City: TCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
};

export const MapIcon = {
  UrlDefault: 'img/pin.svg',
  UrlCurrent: 'img/pin-active.svg',
  Size: [27, 39] as [number, number],
  Anchor: [13.5, 39] as [number, number]
} as const;
