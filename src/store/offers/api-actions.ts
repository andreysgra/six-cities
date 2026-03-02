import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFavoriteStatus, TOffer, TOffers} from '../../types/offer';
import {AxiosError, AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {StoreSlice} from '../const';
import {AppDispatch} from '../../types/state';
import {HttpCode} from '../../services/api/http-code';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';

export const fetchOffers = createAsyncThunk<TOffers, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Offers}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Offers);

    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<TOffers, TOffer['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Offers}/fetch-nearby`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffers>(`${ApiRoute.Offers}/${id}/nearby`);

    return data;
  }
);

export const fetchFavoriteOffers = createAsyncThunk<TOffers, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Offers}/fetch-favorite`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Favorite);

    return data;
  }
);

export const setFavorite = createAsyncThunk<TOffer, TFavoriteStatus, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Offers}/post-favorite`,
  async ({id, status}, {extra: api, dispatch}) => {
    try {
      const {data} = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        dispatch(redirectToRoute(AppRoute.Login));
      }

      return Promise.reject(error);
    }
  }
);
