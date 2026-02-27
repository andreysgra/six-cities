import {TOffer, TOffers} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute, OfferPlace} from '../../const';
import PlaceCard from '../place-card/place-card';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getGroupedOffers} from '../../store/site-process/selectors';
import {setCity} from '../../store/site-process/slice';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {TCityName} from '../../types/city';
import {MouseEvent} from 'react';

function Favorites() {
  const offers = useAppSelector(getGroupedOffers);

  const dispatch = useAppDispatch();

  const groupedOffers = Object.entries(offers);

  if (groupedOffers.length === 0) {
    return <FavoritesEmpty />;
  }
  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    const city = evt.currentTarget.textContent as TCityName;

    dispatch(setCity(city));
  };
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {groupedOffers.sort().map(([city, cityOffers]: [string, TOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root} onClick={handleLinkClick}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {cityOffers.map((offer: TOffer) => (
                <PlaceCard
                  key={`${offer.id}`}
                  offer={offer}
                  place={OfferPlace.Favorite}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
