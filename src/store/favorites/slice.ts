import {TFavoriteOffersState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFavoriteOffers} from './api-actions';
import {TOffer, TOffers} from '../../types/offer';
import {setFavorite} from './api-actions';

const initialState: TFavoriteOffersState = {
  favoriteOffers: [],
  isFavoriteOffersLoading: false
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
        const updatedOffer = action.payload;

        if (updatedOffer.isFavorite) {
          state.favoriteOffers = state.favoriteOffers.concat(updatedOffer);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) =>
            favoriteOffer.id !== updatedOffer.id);
        }
      });
  }
});

export default favoriteOffersSlice;
