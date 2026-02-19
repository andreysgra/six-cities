import {Fragment} from 'react';
import {TCityName} from '../../types/city';

type NoOffersProps = {
  city: TCityName;
}

function NoOffers({city}: NoOffersProps) {
  return (
    <Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </Fragment>
  );
}

export default NoOffers;
