import {TOfferState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchOffer} from './api-actions';
import {TOfferDetailed} from '../../types/offer';

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
        state.isOfferLoading = false;
      });
  }
});

export default offerSlice;
