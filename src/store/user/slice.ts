import {TUserState} from './type';
import {AuthorizationStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchUserStatus, loginUser, logoutUser} from './api-actions';
import {TUser} from '../../types/user';

const initialState: TUserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: ''
};

const userSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUser['email']>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = '';
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export default userSlice;
