import PlaceCard from '../place-card/place-card';
import {TOffers} from '../../types/offer';

type PlacesListProps = {
  offers: TOffers;
}

function PlacesList({offers}: PlacesListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={crypto.randomUUID()} offer={offer} />)}
    </div>
  );
}

export default PlacesList;
