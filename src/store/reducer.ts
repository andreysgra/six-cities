import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';
import {Cities, SortingType} from '../const';
import {createReducer} from '@reduxjs/toolkit';
import {setCity, setSorting} from './action';
import {TSortOption} from '../types/sorting';
import {fetchOffers} from './api-actions';

type State = {
  city: TCityName;
  offers: TOffers;
  sorting: TSortOption;
}

const initialState: State = {
  city: Cities[0],
  offers: [],
  sorting: SortingType.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
    });
});
