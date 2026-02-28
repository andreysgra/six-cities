import {TCommentsState} from './type';
import {SubmitStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchComments, postComment} from './api-actions';
import {TReview, TReviews} from '../../types/review';

const initialState: TCommentsState = {
  comments: [],
  commentStatus: SubmitStatus.Still
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
      .addCase(postComment.fulfilled, (state, action: PayloadAction<TReview>) => {
        state.comments.push(action.payload);
        state.commentStatus = SubmitStatus.Fulfilled;
      })
      .addCase(postComment.pending, (state) => {
        state.commentStatus = SubmitStatus.Pending;
      })
      .addCase(postComment.rejected, (state) => {
        state.commentStatus = SubmitStatus.Rejected;
      });
  }
});

export default commentsSlice;
