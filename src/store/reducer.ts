import {TCityName} from '../types/city';
import {TOfferDetailed, TOffers} from '../types/offer';
import {AuthorizationStatus, Cities, SortingType} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSorting} from './action';
import {TSortOption} from '../types/sorting';
import {
  fetchComments,
  fetchFavoriteOffers,
  fetchNearbyOffers,
  fetchOffer,
  fetchOffers,
  fetchUserStatus,
  loginUser,
  logoutUser,
  postComment
} from './api-actions';
import {TUser} from '../types/user';
import {TReviews} from '../types/review';
import {SubmitStatus} from '../services/api/const';

type State = {
  city: TCityName;
  offers: TOffers;
  offer: TOfferDetailed | null;
  nearByOffers: TOffers;
  favoriteOffers: TOffers;
  comments: TReviews;
  sorting: TSortOption;
  isOffersLoading: boolean;
  isOfferLoading: boolean;
  isFavoriteOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: TUser['email'];
  commentStatus: SubmitStatus;
}

const initialState: State = {
  city: Cities[0],
  offers: [],
  offer: null,
  nearByOffers: [],
  favoriteOffers: [],
  comments: [],
  sorting: SortingType.Popular,
  isOffersLoading: false,
  isOfferLoading: false,
  isFavoriteOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: '',
  commentStatus: SubmitStatus.Still
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
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offer = action.payload;
      state.isOfferLoading = false;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isOfferLoading = true;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isOfferLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteOffersLoading = false;
    })
    .addCase(fetchFavoriteOffers.pending, (state) => {
      state.isFavoriteOffersLoading = true;
    })
    .addCase(fetchFavoriteOffers.rejected, (state) => {
      state.isFavoriteOffersLoading = false;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
      state.commentStatus = SubmitStatus.Fulfilled;
    })
    .addCase(postComment.pending, (state) => {
      state.commentStatus = SubmitStatus.Pending;
    })
    .addCase(postComment.rejected, (state) => {
      state.commentStatus = SubmitStatus.Rejected;
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
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.user = '';
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
});
