import {reducer} from '../reducer';
import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../services/browser-history';
import {Middleware} from 'redux';

type Reducer = ReturnType<typeof reducer>;

const redirect: Middleware<unknown, Reducer> = () =>
  (next) =>
    (action: PayloadAction<string>) => {
      if (action.type === 'app/redirectToRoute') {
        browserHistory.push(action.payload);
      }

      return next(action);
    };

export default redirect;
