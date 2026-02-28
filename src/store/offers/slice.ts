import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TOffersState} from './type';
import {fetchFavoriteOffers, fetchNearbyOffers, fetchOffers} from './api-actions';
import {TOffers} from '../../types/offer';

const initialState: TOffersState = {
  offers: [],
  nearByOffers: [],
  favoriteOffers: [],
  isOffersLoading: false,
  isFavoriteOffersLoading: false
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
      .addCase(fetchFavoriteOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
      });
  }
});

export default offersSlice;
