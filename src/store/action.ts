import {createAction} from '@reduxjs/toolkit/src';
import {TCityName} from '../types/city';
import {TOffers} from '../types/offer';

export const setCity = createAction<TCityName>('city/set');

export const setOffers = createAction<TOffers>('offers/set');
