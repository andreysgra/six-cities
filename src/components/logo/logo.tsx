import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import classNames from 'classnames';

function Logo() {
  const link = useLocation().pathname;

  return (
    <div className="header__left">
      <Link
        className=
          {classNames('header__logo-link', {'header__logo-link--active': link === AppRoute.Root as string})}
        to={AppRoute.Root}
      >
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41}/>
      </Link>
    </div>
  );
}

export default Logo;
