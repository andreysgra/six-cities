import PlaceCard from '../place-card/place-card';
import {TOffers} from '../../types/offer';

type PlacesListProps = {
  offers: TOffers;
  onPlaceCardHover: (id: string | null) => void;
}

function PlacesList({offers, onPlaceCardHover}: PlacesListProps) {
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

export default PlacesList;
