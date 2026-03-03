import OfferGallery from '../offer-gallery/offer-gallery';
import OfferDescription from '../offer-description/offer-description';
import {Fragment, useEffect} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import {MapPlace} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsOfferLoading, getOffer} from '../../store/offer/selectors';
import {getComments} from '../../store/comments/selectors';
import {fetchOffer} from '../../store/offer/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchComments, postComment} from '../../store/comments/api-actions';
import Spinner from '../spinner/spinner';
import {TReviewContent} from '../../types/review';
import {getIsAuthorized} from '../../store/user/selectors';
import {TOffers} from '../../types/offer';

type OfferProps = {
  id: string;
  nearByOffers: TOffers;
}

function Offer({id, nearByOffers}: OfferProps) {
  const offer = useAppSelector(getOffer);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const comments = useAppSelector(getComments);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (!offer) {
    return null;
  }

  if (isOfferLoading) {
    return <Spinner />;
  }

  const locations = nearByOffers
    .map((nearByOffer) => (
      {id: nearByOffer.id, ...nearByOffer.location}
    ));

  locations.push({id: offer.id, ...offer.location});

  const handleFormSubmit = (formData: Omit<TReviewContent, 'id'>) => {
    dispatch(postComment({id: offer.id, ...formData}));
  };

  return (
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
  );
}

export default Offer;
