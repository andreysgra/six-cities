import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import {Fragment, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import NoOffers from '../no-offers/no-offers';
import classNames from 'classnames';

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
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
