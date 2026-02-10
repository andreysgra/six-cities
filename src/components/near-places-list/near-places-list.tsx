import {TOffers} from '../../types/offer';
import {OfferPlace} from '../../const';
import PlaceCard from '../place-card/place-card';

type NearPlacesListProps = {
  nearByOffers: TOffers;
}

function NearPlacesList({nearByOffers}: NearPlacesListProps) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {nearByOffers.map((nearByOffer) =>
          <PlaceCard key={nearByOffer.id} offer={nearByOffer} place={OfferPlace.NearPlace} />
        )}
      </div>
    </section>
  );
}

export default NearPlacesList;
