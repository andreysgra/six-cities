import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import './not-found-page.css';

function NotFoundPage() {
  return (
    <main className="page__main">
      <div className="container">
        <section className="not-found">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Page not found</p>
          <p className="not-found__description">
              The page you are looking for does not exist or has been moved.
          </p>
          <Link to={AppRoute.Root} className="not-found__link button">Back to home page.</Link>
        </section>
      </div>
    </main>
  );
}

export default NotFoundPage;
