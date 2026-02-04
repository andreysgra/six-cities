import PlaceCard from '../place-card/place-card';
import {TOffers} from '../../types/offer';
import {useState} from 'react';

type PlacesListProps = {
  offers: TOffers;
}

function PlacesList({offers}: PlacesListProps) {
  const [, setActiveOfferId] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => setActiveOfferId(id);
  const handleCardMouseLeave = () => setActiveOfferId(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={crypto.randomUUID()}
          offer={offer}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default PlacesList;
