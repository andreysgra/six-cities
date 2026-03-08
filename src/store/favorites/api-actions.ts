import {createAsyncThunk} from '@reduxjs/toolkit';
import {TFavoriteStatus, TOffer, TOffers} from '../../types/offer';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {AppDispatch} from '../../types/state';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';

export const fetchFavoriteOffers = createAsyncThunk<TOffers, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Favorites}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TOffers>(ApiRoute.Favorite);

    return data;
  }
);

export const setFavorite = createAsyncThunk<TOffer, TFavoriteStatus, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Favorites}/post`,
  async ({id, status}, {extra: api, dispatch}) => {
    try {
      const {data} = await api.post<TOffer>(`${ApiRoute.Favorite}/${id}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.Login));
      }

      return Promise.reject(error);
    }
  }
);
