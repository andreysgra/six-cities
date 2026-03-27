import {TCommentsState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchComments, postComment} from './api-actions';
import {TReview, TReviews} from '../../types/review';

const initialState: TCommentsState = {
  comments: [],
  submitStatus: RequestStatus.Idle
};

const commentsSlice = createSlice({
  name: StoreSlice.Comments,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action: PayloadAction<TReviews>) => {
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.comments = [];
      })
      .addCase(postComment.fulfilled, (state, action: PayloadAction<TReview>) => {
        state.comments.push(action.payload);
        state.submitStatus = RequestStatus.Success;
      })
      .addCase(postComment.pending, (state) => {
        state.submitStatus = RequestStatus.Pending;
      })
      .addCase(postComment.rejected, (state) => {
        state.submitStatus = RequestStatus.Error;
      });
  }
});

export default commentsSlice;
