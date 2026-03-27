import {TSiteProcessState} from './type';
import {Cities} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TCityName} from '../../types/city';
import {TSortOption} from '../../types/sorting';

const initialState: TSiteProcessState = {
  city: Cities[0],
  sorting: 'Popular'
};

const siteProcessSlice = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<TCityName>) => {
      state.city = action.payload;
    },
    setSorting: (state, action: PayloadAction<TSortOption>) => {
      state.sorting = action.payload;
    }
  }
});

export const {setCity, setSorting} = siteProcessSlice.actions;

export default siteProcessSlice;
