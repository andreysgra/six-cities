import OfferGallery from '../offer-gallery/offer-gallery';
import OfferDescription from '../offer-description/offer-description';
import {Fragment, useEffect} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import Map from '../map/map';
import {MapPlace} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsOfferFailed, getIsOfferLoading, getOffer} from '../../store/offer/selectors';
import {getComments} from '../../store/comments/selectors';
import {fetchOffer} from '../../store/offer/api-actions';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {fetchComments} from '../../store/comments/api-actions';
import Spinner from '../spinner/spinner';
import {getIsAuthorized} from '../../store/user/selectors';
import {TOffers} from '../../types/offer';
import OfferError from '../offer-error/offer-error';

type OfferProps = {
  id: string;
  nearByOffers: TOffers;
}

function Offer({id, nearByOffers}: OfferProps) {
  const offer = useAppSelector(getOffer);
  const isOfferLoading = useAppSelector(getIsOfferLoading);
  const isOfferFailed = useAppSelector(getIsOfferFailed);
  const comments = useAppSelector(getComments);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (isOfferLoading) {
    return <Spinner />;
  }

  if (isOfferFailed || !offer) {
    return <OfferError />;
  }

  const locations = nearByOffers
    .map((nearByOffer) => (
      {id: nearByOffer.id, ...nearByOffer.location}
    ));

  locations.push({id: offer.id, ...offer.location});

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
            {isAuthorized && <ReviewForm id={id} />}
          </section>
        </div>
      </div>
      <Map city={offer.city} locations={locations} offerCurrentId={offer.id} place={MapPlace.Offer} />
    </section>
  );
}

export default Offer;
