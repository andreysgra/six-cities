import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Favorites;

export const getFavoriteOffers = (state: State) => state[storeSlice].favoriteOffers;

export const getIsFavoritesLoading = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsFavoritesFailed = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getIsFavoriteAdding = (state: State)=>
  state[storeSlice].addingStatus === RequestStatus.Pending;
