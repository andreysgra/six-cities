import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOffer, TOffers} from '../../types/offer';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {StoreSlice} from '../const';

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
