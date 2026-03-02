import {TFavoriteOffersState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFavoriteOffers} from './api-actions';
import {TOffer, TOffers} from '../../types/offer';
import {setFavorite} from './api-actions';

const initialState: TFavoriteOffersState = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false,
  isStatusPending: false
};

const favoriteOffersSlice = createSlice({
  name: StoreSlice.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.favoriteOffers = action.payload;
        state.isFavoriteOffersLoading = false;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.isFavoriteOffersLoading = true;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.isFavoriteOffersLoading = false;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) =>
            favoriteOffer.id !== action.payload.id);
        }

        state.isStatusPending = false;
      })
      .addCase(setFavorite.pending, (state) => {
        state.isStatusPending = true;
      })
      .addCase(setFavorite.rejected, (state) => {
        state.isStatusPending = false;
      });
  }
});

export default favoriteOffersSlice;
