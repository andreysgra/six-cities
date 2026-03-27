import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Offers;

export const getOffers = (state: State) => state[storeSlice].offers;

export const getNearByOffers = (state: State) => state[storeSlice].nearByOffers;

export const getIsOffersLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

