import {combineReducers} from '@reduxjs/toolkit';
import {StoreSlice} from './const';
import commentsSlice from './comments/slice';
import offerSlice from './offer/slice';
import offersSlice from './offers/slice';
import userSlice from './user/slice';
import siteProcessSlice from './site-process/slice';
import favoriteOffersSlice from './favorites/slice';

export const reducer = combineReducers({
  [StoreSlice.Comments]: commentsSlice.reducer,
  [StoreSlice.Favorites]: favoriteOffersSlice.reducer,
  [StoreSlice.Offer]: offerSlice.reducer,
  [StoreSlice.Offers]: offersSlice.reducer,
  [StoreSlice.SiteProcess]: siteProcessSlice.reducer,
  [StoreSlice.User]: userSlice.reducer
});
