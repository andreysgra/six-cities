import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Offer;

export const getOffer = (state: State) => state[storeSlice].offer;

export const getIsOfferLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsOfferFailed = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Error;
