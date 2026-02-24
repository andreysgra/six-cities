import {Fragment} from 'react';
import Favorites from '../../components/favorites/favorites';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import classNames from 'classnames';

function FavoritesPage() {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  const favoriteClassName =
    classNames('page__main page__main--favorites', {'page__main--favorites-empty': favoriteOffers.length === 0});

  return (
    <Fragment>
      <main className={favoriteClassName}>
        <div className="page__favorites-container container">
          <Favorites />
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
