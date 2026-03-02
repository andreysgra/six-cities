import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getFavoriteOffers = (state: State) => state[StoreSlice.Favorites].favoriteOffers;

export const getIsFavoriteOffersLoading =
  (state: State) => state[StoreSlice.Favorites].isFavoriteOffersLoading;

export const getIsStatusPending =
  (state: State) => state[StoreSlice.Favorites].isStatusPending;
