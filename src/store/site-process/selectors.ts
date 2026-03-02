import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {createSelector} from '@reduxjs/toolkit';
import {getFavoriteOffers} from '../favorites/selectors';
import {getOffers} from '../offers/selectors';
import {groupBy, SorterOffers} from '../../utils/utils';

export const getCity = (state: State) => state[StoreSlice.SiteProcess].city;

export const getSorting = (state: State) => state[StoreSlice.SiteProcess].sorting;

export const getFilteredOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers
    .filter((offer) => offer.city.name === city)
    .sort(SorterOffers[sorting])
);

export const getGroupedOffers = createSelector(
  [getFavoriteOffers],
  (offers) => groupBy(offers, (offer) => offer.city.name)
);
