import PlaceCard from '../place-card/place-card';
import {TOffers} from '../../types/offer';
import {memo} from 'react';

type PlacesListProps = {
  offers: TOffers;
  onPlaceCardHover: (id: string | null) => void;
}

function PlacesListElement({offers, onPlaceCardHover}: PlacesListProps) {
  const handleCardMouseEnter = (id: string) => onPlaceCardHover(id);
  const handleCardMouseLeave = () => onPlaceCardHover(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={`${offer.id}`}
          offer={offer}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

const PlacesList = memo(PlacesListElement,
  (prevProps, nextProps) =>
    prevProps.offers === nextProps.offers
);

export default PlacesList;
