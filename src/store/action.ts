import {createAction} from '@reduxjs/toolkit/src';
import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';
import {TSortOption} from '../types/sorting';

export const setCity = createAction<TCityName>('city/set');

export const setOffers = createAction<TOffers>('offers/set');

export const setSorting = createAction<TSortOption>('sorting/set');
