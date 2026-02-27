import ReviewForm from '../../components/review-form/review-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import React, {Fragment, useEffect} from 'react';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import {MapPlace, NEARBY_OFFERS_COUNT} from '../../const';
import {shuffleArray} from '../../utils/utils';
import Map from '../../components/map/map';
import OfferDescription from '../../components/offer-description/offer-description';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useParams} from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import {TReviewContent} from '../../types/review';
import {getIsAuthorized} from '../../store/user/selectors';
import {getIsOfferLoading, getOffer} from '../../store/offer/selectors';
import {getNearByOffers} from '../../store/offers/selectors';
import {getComments} from '../../store/comments/selectors';
import {fetchOffer} from '../../store/offer/api-actions';
import {fetchComments, postComment} from '../../store/comments/api-actions';
import {fetchNearbyOffers} from '../../store/offers/api-actions';

function OfferPage(): React.JSX.Element | null {
  const offer = useAppSelector(getOffer);
  const nearByOffers = useAppSelector(getNearByOffers);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const comments = useAppSelector(getComments);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner />;
  }

  const randomNearByOffers = shuffleArray(nearByOffers).slice(0, NEARBY_OFFERS_COUNT);

  const locations = randomNearByOffers
    .map((nearByOffer) => (
      {id: nearByOffer.id, ...nearByOffer.location}
    ));

  locations.push({id: offer.id, ...offer.location});

  const handleFormSubmit = (formData: Omit<TReviewContent, 'id'>) => {
    dispatch(postComment({id: offer.id, ...formData}));
  };

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
              {comments.length > 0 && (
                <Fragment>
                  <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ReviewsList reviews={comments} />
                </Fragment>
              )}
              {isAuthorized && <ReviewForm onSubmit={handleFormSubmit} />}
            </section>
          </div>
        </div>
        <Map city={offer.city} locations={locations} offerCurrentId={offer.id} place={MapPlace.Offer} />
      </section>
      <div className="container">
        <NearPlacesList nearByOffers={randomNearByOffers} />
      </div>
    </main>
  );
}

export default OfferPage;
