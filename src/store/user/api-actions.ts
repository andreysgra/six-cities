import {createAsyncThunk} from '@reduxjs/toolkit';
import {TUser, TUserAuth} from '../../types/user';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {dropToken, saveToken} from '../../services/token';
import browserHistory from '../../services/browser-history';
import {StoreSlice} from '../const';

export const fetchUserStatus = createAsyncThunk<TUser, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.User}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TUser>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<TUser, TUserAuth, {extra: AxiosInstance}>(
  `${StoreSlice.User}/login`,
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    browserHistory.back();

    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.User}/logout`,
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);

    dropToken();
  }
);
