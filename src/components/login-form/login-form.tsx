import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent, useRef} from 'react';
import {VALID_PASSWORD_REGEXP} from '../../const';
import {loginUser} from '../../store/user/api-actions';

function LoginForm() {
  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!passwordRef.current?.value.match(VALID_PASSWORD_REGEXP)) {
      return;
    }

    if (emailRef.current !== null) {
      dispatch(loginUser(
        {
          email: emailRef.current.value,
          password: passwordRef.current.value
        }
      ));
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden" htmlFor="email">E-mail</label>
        <input
          className="login__input form__input"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          ref={emailRef}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden" htmlFor="password">Password</label>
        <input
          className="login__input form__input"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;
