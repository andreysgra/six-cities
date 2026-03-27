import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Comments;

export const getComments = (state: State) => state[storeSlice].comments;

export const getIsCommentSubmitSuccess =
  (state: State)=> state[storeSlice].submitStatus === RequestStatus.Success;

export const getIsCommentSubmitting =
  (state: State)=> state[storeSlice].submitStatus === RequestStatus.Pending;

export const getIsCommentSubmitFailed =
  (state: State)=> state[storeSlice].submitStatus === RequestStatus.Error;

