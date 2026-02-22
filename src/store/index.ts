import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {setOffers} from './action';
import {offers} from '../mocks/offers';
import {createApi} from '../services/api/api';

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});


store.dispatch(setOffers(offers));

export default store;
