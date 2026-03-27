import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TOffersState} from './type';
import {fetchNearbyOffers, fetchOffers} from './api-actions';
import {TOffer, TOffers} from '../../types/offer';
import {setFavorite} from '../favorites/api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TOffersState = {
  offers: [],
  nearByOffers: [],
  loadingStatus: RequestStatus.Idle
};

const offersSlice = createSlice({
  name: StoreSlice.Offers,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.offers = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.nearByOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearByOffers = [];
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        state.offers = state.offers
          .map((offer) => offer.id === action.payload.id ? action.payload : offer);

        state.nearByOffers = state.nearByOffers
          .map((nearByOffer) =>
            nearByOffer.id === action.payload.id ? action.payload : nearByOffer);
      });
  }
});

export default offersSlice;
