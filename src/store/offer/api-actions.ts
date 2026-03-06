import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOfferDetailed} from '../../types/offer';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {AppDispatch} from '../../types/state';
import {ApiRoute} from '../../services/api/api-route';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';
import {StoreSlice} from '../const';

export const fetchOffer = createAsyncThunk<TOfferDetailed, TOfferDetailed['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Offer}/fetch`,
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<TOfferDetailed>(`${ApiRoute.Offers}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  }
);
