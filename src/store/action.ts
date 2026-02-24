import {createAction} from '@reduxjs/toolkit';
import {TCityName} from '../types/city';
import {TSortOption} from '../types/sorting';
import {AppRoute} from '../const';

export const setCity = createAction<TCityName>('city/set');

export const setSorting = createAction<TSortOption>('sorting/set');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
