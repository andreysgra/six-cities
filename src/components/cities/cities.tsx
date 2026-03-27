import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import {Fragment, useState} from 'react';
import {useAppSelector} from '../../hooks/use-app-selector';
import NoOffers from '../no-offers/no-offers';
import classNames from 'classnames';
import Sorting from '../sorting/sorting';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {TSortOption} from '../../types/sorting';
import Spinner from '../spinner/spinner';
import {getCity, getFilteredOffers, getSorting} from '../../store/site-process/selectors';
import {getIsOffersLoading} from '../../store/offers/selectors';
import {setSorting} from '../../store/site-process/slice';

function Cities() {
  const activeCity = useAppSelector(getCity);
  const activeSorting = useAppSelector(getSorting);
  const offers = useAppSelector(getFilteredOffers);
  const isOffersLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();

  const [offerCurrentId, setOfferCurrentId] = useState<string | null>(null);

  const locations = offers.map(({id, location}) =>
    ({id, ...location}));

  const handlePlaceCardHover = (offerId: string | null) => {
    setOfferCurrentId(offerId);
  };

  const handleSortingChange = (option: TSortOption) =>
    dispatch(setSorting(option));

  const hasOffers = offers.length > 0;

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <div className="cities">
      <div className={classNames(
        'cities__places-container container',
        {'cities__places-container--empty': !hasOffers})}
      >
        {hasOffers ? (
          <Fragment>
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <Sorting activeSorting={activeSorting} onChange={handleSortingChange} />
              <PlacesList offers={offers} onPlaceCardHover={handlePlaceCardHover} />
            </section>
            <div className="cities__right-section">
              <Map city={offers[0].city} locations={locations} offerCurrentId={offerCurrentId} />
            </div>
          </Fragment>
        ) : <NoOffers city={activeCity} />}
      </div>
    </div>
  );
}

export default Cities;
