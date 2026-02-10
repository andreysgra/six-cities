import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {TReviews} from '../../types/review';
import {Fragment} from 'react';
import {TOfferDetailed, TOffers} from '../../types/offer';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import {City, MapPlace, NEARBY_OFFERS_COUNT} from '../../const';
import {shuffleArray} from '../../utils/utils';
import Map from '../../components/map/map';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferGallery from '../../components/offer-gallery/offer-gallery';

type OfferPageProps = {
  reviews: TReviews;
  offer: TOfferDetailed;
  nearByOffers: TOffers;
}

function OfferPage({reviews, offer, nearByOffers}: OfferPageProps) {
  const randomNearByOffers = shuffleArray(nearByOffers).slice(0, NEARBY_OFFERS_COUNT);

  const locations = randomNearByOffers
    .map((nearByOffer) => (
      {id: nearByOffer.id, ...nearByOffer.location}
    ));

  locations.push({id: offer.id, ...offer.location});

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <OfferGallery offer={offer} />
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferDescription offer={offer} />
            <section className="offer__reviews reviews">
              {reviews.length > 0 && (
                <Fragment>
                  <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews}/>
                </Fragment>
              )}
              {/*TODO Добавить проверку авторизации пользователя*/}
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map city={City} locations={locations} offerCurrentId={offer.id} place={MapPlace.Offer} />
      </section>
      <div className="container">
        <NearPlacesList nearByOffers={randomNearByOffers} />
      </div>
    </main>
  );
}

export default OfferPage;
