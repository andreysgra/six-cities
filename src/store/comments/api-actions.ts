import {createAsyncThunk} from '@reduxjs/toolkit';
import {TReview, TReviewContent, TReviews} from '../../types/review';
import {TOffer} from '../../types/offer';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {StoreSlice} from '../const';

export const fetchComments = createAsyncThunk<TReviews, TOffer['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Comments}/fetch`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${ApiRoute.Comments}/${id}`);

    return data;
  }
);

export const postComment = createAsyncThunk<TReview, TReviewContent, {extra: AxiosInstance}>(
  `${StoreSlice.Comments}/post`,
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`${ApiRoute.Comments}/${id}`, {comment, rating});

    return data;
  }
);
