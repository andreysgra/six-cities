import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getComments = (state: State) => state[StoreSlice.Comments].comments;

export const getCommentStatus = (state: State) => state[StoreSlice.Comments].commentStatus;
