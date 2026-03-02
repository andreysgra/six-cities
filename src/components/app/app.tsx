import MainPage from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../services/browser-history';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useEffect} from 'react';
import {AuthorizationStatus} from '../../services/api/const';
import {getIsAuthorized} from '../../store/user/selectors';
import {fetchFavoriteOffers} from '../../store/favorites/api-actions';

function App() {
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthorized) {
      dispatch(fetchFavoriteOffers());
    }
  }, [isAuthorized, dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                restrictedFor={AuthorizationStatus.Auth}
                redirectedTo={AppRoute.Root}
              >
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectedTo={AppRoute.Login}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
