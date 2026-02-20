import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import {Fragment, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import NoOffers from '../no-offers/no-offers';
import classNames from 'classnames';
import Sorting from '../sorting/sorting';

function Cities() {
  const activeCity = useAppSelector((state) => state.city);

  const offers = useAppSelector((state) => state.offers)
    .filter((offer) => offer.city.name === activeCity);

  const locations = offers.map(({id, location}) => ({id, ...location}));

  const [offerCurrentId, setOfferCurrentId] = useState<string | null>(null);

  const handlePlaceCardHover = (offerId: string | null) => {
    setOfferCurrentId(offerId);
  };

  const hasOffers = offers.length > 0;

  return (
    <div className="cities">
      <div className={classNames('cities__places-container container', {'cities__places-container--empty': !hasOffers})}>
        {hasOffers ? (
          <Fragment>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <Sorting />
              <PlacesList offers={offers} onPlaceCardHover={handlePlaceCardHover}/>
            </section>
            <div className="cities__right-section">
              <Map city={offers[0].city} locations={locations} offerCurrentId={offerCurrentId}/>
            </div>
          </Fragment>
        ) : <NoOffers city={activeCity} />}
      </div>
    </div>
  );
}

export default Cities;
