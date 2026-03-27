import {TFavoriteOffersState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFavoriteOffers} from './api-actions';
import {TOffer, TOffers} from '../../types/offer';
import {setFavorite} from './api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TFavoriteOffersState = {
  favoriteOffers: [],
  addingStatus: RequestStatus.Idle,
  loadingStatus: RequestStatus.Idle
};

const favoriteOffersSlice = createSlice({
  name: StoreSlice.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoriteOffers.fulfilled, (state, action: PayloadAction<TOffers>) => {
        state.favoriteOffers = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((favoriteOffer) =>
            favoriteOffer.id !== action.payload.id);
        }

        state.addingStatus = RequestStatus.Success;
      })
      .addCase(setFavorite.pending, (state) => {
        state.addingStatus = RequestStatus.Pending;
      })
      .addCase(setFavorite.rejected, (state) => {
        state.addingStatus = RequestStatus.Error;
      });
  }
});

export default favoriteOffersSlice;
