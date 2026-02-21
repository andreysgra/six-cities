import {TOffer, TOffers} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute, OfferPlace} from '../../const';
import PlaceCard from '../place-card/place-card';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {groupBy} from '../../utils/utils';

type FavoritesProps = {
  offers: TOffers;
}

function Favorites({offers}: FavoritesProps) {
  const offersGropedByCity = groupBy(offers, (offer) => offer.city.name);

  const groupedFavoriteOffers = Object.entries(offersGropedByCity);

  if (groupedFavoriteOffers.length === 0) {
    return <FavoritesEmpty />;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {groupedFavoriteOffers.sort().map(([city, cityOffers]: [string, TOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root}>
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
