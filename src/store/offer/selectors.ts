import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getOffer = (state: State) => state[StoreSlice.Offer].offer;

export const getIsOfferLoading = (state: State) => state[StoreSlice.Offer].isOfferLoading;
