import {Fragment} from 'react';
import Favorites from '../../components/favorites/favorites';
import {TOffers} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type FavoritesPageProps = {
  offers: TOffers;
}

function FavoritesPage({offers}: FavoritesPageProps) {
  return (
    <Fragment>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <Favorites offers={offers} />
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33}/>
        </Link>
      </footer>
    </Fragment>
  );
}

export default FavoritesPage;
