import Logo from '../logo/logo';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, Outlet} from 'react-router-dom';
import {Fragment} from 'react';

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
