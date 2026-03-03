import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getOffers = (state: State) => state[StoreSlice.Offers].offers;

export const getNearByOffers = (state: State) => state[StoreSlice.Offers].nearByOffers;

export const getIsOffersLoading = (state: State) => state[StoreSlice.Offers].isOffersLoading;
