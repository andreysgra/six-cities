import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOfferDetailed, TOffers} from '../types/offer';
import {AxiosError, AxiosInstance} from 'axios';
import {ApiRoute} from '../services/api/api-route';
import {TUser, TUserAuth} from '../types/user';
import {dropToken, saveToken} from '../services/token';
import {AppRoute, HttpCode} from '../const';
import {redirectToRoute} from './action';
import {AppDispatch} from '../types/state';
import browserHistory from '../services/browser-history';

export const fetchOffers = createAsyncThunk<TOffers, undefined, {extra: AxiosInstance}>(
  'offers/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Offers);

    return data;
  }
);

export const fetchOffer = createAsyncThunk<TOfferDetailed, TOfferDetailed['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  'offer/fetch',
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<TOfferDetailed>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  }
);

export const fetchUserStatus = createAsyncThunk<TUser, undefined, {extra: AxiosInstance}>(
  'user/fetch-status',
  async (_, {extra: api}) => {
    const {data} = await api.get<TUser>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<TUserAuth['email'], TUserAuth, { extra: AxiosInstance }>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    browserHistory.back();

    return email;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'user/logout',
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);

    dropToken();
  }
);
