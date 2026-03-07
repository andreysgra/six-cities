import {TOfferState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchOffer} from './api-actions';
import {TOffer, TOfferDetailed} from '../../types/offer';
import {setFavorite} from '../favorites/api-actions';

const initialState: TOfferState = {
  offer: null,
  isOfferLoading: false
};

const offerSlice = createSlice({
  name: StoreSlice.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled, (state, action: PayloadAction<TOfferDetailed>) => {
        state.offer = action.payload;
        state.isOfferLoading = false;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferLoading = true;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offer = null;
        state.isOfferLoading = false;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        if (state.offer && state.offer.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default offerSlice;
