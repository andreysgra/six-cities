import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffers} from '../types/offer';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../services/api/api-route';
import {TUser, TUserAuth} from '../types/user';
import {saveToken} from '../services/token';

export const fetchOffers = createAsyncThunk<TOffers, undefined, {extra: AxiosInstance}>(
  'offers/fetch',
  async (_, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Offers);

    return data;
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

    return email;
  }
);
