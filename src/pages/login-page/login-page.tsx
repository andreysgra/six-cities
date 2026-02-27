import LoginForm from '../../components/login-form/login-form';
import {MouseEvent} from 'react';
import {TCityName} from '../../types/city';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {getRandomElement} from '../../utils/utils';
import {AppRoute, Cities} from '../../const';
import {Link} from 'react-router-dom';
import {setCity} from '../../store/site-process/slice';

function LoginPage() {
  const dispatch = useAppDispatch();

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    const cityName = evt.currentTarget.textContent as TCityName;

    dispatch(setCity(cityName));
  };
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Root} onClick={handleLinkClick}>
              <span>{getRandomElement<TCityName>(Cities)}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
