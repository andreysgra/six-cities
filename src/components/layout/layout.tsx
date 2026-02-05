import Logo from '../logo/logo';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, Outlet, useLocation} from 'react-router-dom';
import {Fragment} from 'react';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  let rootClass: string;

  const {pathname} = useLocation();
  const path = ('/').concat(pathname.split('/')[1]) as AppRoute;

  switch (path) {
    case AppRoute.Root:
      rootClass = 'page--gray page--main';
      break;
    case AppRoute.Login:
      rootClass = 'page--gray page--login';
      break;
    case AppRoute.Favorites:
      /*TODO Добавить условие для класса пустого списка
      *  favoriteOffers.length === 0 ? 'page--favorites-empty' : ''*/
      rootClass = '';
      break;
    case AppRoute.Offer:
      rootClass = '';
      break;
    default:
      rootClass = '';
  }

  return (
    <div className={`page ${rootClass}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </Fragment>
                        :
                        <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {isAuthorized && (
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  )}
                </ul>
              </nav>)}
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
