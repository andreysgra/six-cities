import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TOffersState} from './type';
import {fetchNearbyOffers, fetchOffers} from './api-actions';
import {TOffer, TOffers} from '../../types/offer';
import {setFavorite} from '../favorites/api-actions';

const initialState: TOffersState = {
  offers: [],
  nearByOffers: [],
  isOffersLoading: false
};

const offersSlice = createSlice({
  name: StoreSlice.Offers,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersLoading = false;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.nearByOffers = action.payload;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        const updatedOffer = action.payload;

        state.offers = state.offers
          .map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

        state.nearByOffers = state.nearByOffers
          .map((nearByOffer) => nearByOffer.id === updatedOffer.id ? updatedOffer : nearByOffer);
      });
  }
});

export default offersSlice;
