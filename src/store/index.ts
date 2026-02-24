import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {createApi} from '../services/api/api';
import redirect from './middlewares/redirect';

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

export default store;
