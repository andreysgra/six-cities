import Logo from '../logo/logo';
import {AppRoute, PageTitle} from '../../const';
import {Link, Outlet, useLocation} from 'react-router-dom';
import {Fragment} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import classNames from 'classnames';
import {getIsAuthorized, getUser} from '../../store/user/selectors';
import {logoutUser} from '../../store/user/api-actions';
import {getFavoriteOffers} from '../../store/favorites/selectors';
import {Helmet} from 'react-helmet-async';

function Layout() {
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  let rootClass: string;
  let pageTitle: string;

  const {pathname} = useLocation();
  const path = ('/').concat(pathname.split('/')[1]) as AppRoute;

  switch (path) {
    case AppRoute.Root:
      pageTitle = PageTitle.Main;
      rootClass = 'page--gray page--main';
      break;
    case AppRoute.NotFound:
      pageTitle = PageTitle.NotFound;
      rootClass = 'page--gray page--main';
      break;
    case AppRoute.Login:
      pageTitle = PageTitle.LogIn;
      rootClass = 'page--gray page--login';
      break;
    case AppRoute.Favorites:
      pageTitle = PageTitle.Favorites;
      rootClass = favoriteOffers.length === 0 ? 'page--favorites-empty' : '';
      break;
    case AppRoute.Offer:
      pageTitle = PageTitle.Offer;
      rootClass = '';
      break;
    default:
      pageTitle = PageTitle.Main;
      rootClass = '';
      break;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className={classNames('page', {[rootClass]: rootClass !== ''})}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo/>
              {path !== AppRoute.Login && (
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <Link
                        className="header__nav-link header__nav-link--profile"
                        to={isAuthorized ? AppRoute.Favorites : AppRoute.Login}
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        {isAuthorized ?
                          <Fragment>
                            <span className="header__user-name user__name">{user?.email}</span>
                            <span className="header__favorite-count">{favoriteOffers.length}</span>
                          </Fragment>
                          :
                          <span className="header__login">Sign in</span>}
                      </Link>
                    </li>
                    {isAuthorized && (
                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={AppRoute.Root} onClick={handleLogoutClick}>
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>)}
            </div>
          </div>
        </header>

        <Outlet/>
      </div>
    </>
  );
}

export default Layout;
