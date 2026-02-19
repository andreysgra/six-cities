import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';
import {Cities} from '../const';
import {createReducer} from '@reduxjs/toolkit/src';
import {setCity, setOffers} from './action';

type State = {
  city: TCityName;
  offers: TOffers;
}

const initialState: State = {
  city: Cities[0],
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
