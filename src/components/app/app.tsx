import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import {TOffers} from '../../types/offer';
import {TReviews} from '../../types/review';
import {nearbyOffers} from '../../mocks/nearby-offers';

type AppProps = {
  offers: TOffers;
  nearByOffers: TOffers;
  reviews: TReviews;
}

const authorizationStatus = AuthorizationStatus.NoAuth;

function App({offers, reviews}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout authorizationStatus={authorizationStatus} />}
        >
          <Route
            index
            element={<MainPage offers={offers} />}
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
            element={<OfferPage reviews={reviews} nearByOffers={nearbyOffers} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
                restrictedFor={AuthorizationStatus.NoAuth}
                redirectedTo={AppRoute.Login}
              >
                <FavoritesPage favoriteOffers={offers} />
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
