import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';
import {AuthorizationStatus, Cities, SortingType} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSorting} from './action';
import {TSortOption} from '../types/sorting';
import {fetchOffers, fetchUserStatus, loginUser} from './api-actions';
import {TUser} from '../types/user';

type State = {
  city: TCityName;
  offers: TOffers;
  sorting: TSortOption;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: TUser['email'];
}

const initialState: State = {
  city: Cities[0],
  offers: [],
  sorting: SortingType.Popular,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.NoAuth,
  user: ''
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
    .addCase(fetchUserStatus.fulfilled, (state, action) => {
      state.user = action.payload.email;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserStatus.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});
