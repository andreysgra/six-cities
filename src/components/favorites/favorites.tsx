import {TOffer, TOffers} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute, OfferPlace} from '../../const';
import PlaceCard from '../place-card/place-card';

type FavoritesProps = {
  favoriteOffers: TOffers;
}

function Favorites({favoriteOffers}: FavoritesProps) {
  const groupOffersByCity =
    favoriteOffers.reduce<{ [key: string]: TOffers }>((acc: { [key: string]: TOffers }, curr: TOffer) => {
      if (curr.isFavorite) {
        const city = curr.city.name;

        if (!(city in acc)) {
          acc[city] = [];
        }

        acc[city].push(curr);
      }

      return acc;
    }, {});

  const groupedFavoriteOffers = Object.entries(groupOffersByCity);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {groupedFavoriteOffers.sort().map(([city, groupedOffers]: [string, TOffers]) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.Root}>
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {groupedOffers.map((offer: TOffer) =>
                <PlaceCard key={`favorite-${offer.id}`} offer={offer} place={OfferPlace.Favorite} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Favorites;
