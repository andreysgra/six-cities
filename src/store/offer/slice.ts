import {TOfferState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchOffer} from './api-actions';
import {TOffer, TOfferDetailed} from '../../types/offer';
import {setFavorite} from '../favorites/api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TOfferState = {
  offer: null,
  loadingStatus: RequestStatus.Idle
};

const offerSlice = createSlice({
  name: StoreSlice.Offer,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffer.fulfilled, (state, action: PayloadAction<TOfferDetailed>) => {
        state.offer = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offer = null;
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(setFavorite.fulfilled, (state, action: PayloadAction<TOffer>) => {
        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export default offerSlice;
