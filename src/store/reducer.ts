import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';
import {AuthorizationStatus, Cities, SortingType} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSorting} from './action';
import {TSortOption} from '../types/sorting';
import {fetchOffers, fetchUserStatus} from './api-actions';

type State = {
  city: TCityName;
  offers: TOffers;
  sorting: TSortOption;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

const initialState: State = {
  city: Cities[0],
  offers: [],
  sorting: SortingType.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchUserStatus.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
