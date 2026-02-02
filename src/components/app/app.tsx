import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';


type AppProps = {
  offersCount: number;
}

const authorizationStatus = AuthorizationStatus.NoAuth;

function App({offersCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout authorizationStatus={authorizationStatus} />}
        >
          <Route
            index
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
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
                authorizationStatus={authorizationStatus}
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
    </BrowserRouter>
  );
}

export default App;
