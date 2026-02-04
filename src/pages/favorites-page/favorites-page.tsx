import {Fragment} from 'react';
import Favorites from '../../components/favorites/favorites';
import {TOffers} from '../../types/offer';

type FavoritesPageProps = {
  favoriteOffers: TOffers;
}

function FavoritesPage({favoriteOffers}: FavoritesPageProps) {
  return (
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites favoriteOffers={favoriteOffers} />
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </Fragment>
  );
}

export default FavoritesPage;
