import {TOfferDetailed} from '../../types/offer';
import {Fragment} from 'react';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {BookmarkPlace} from '../../const';
import {capitalizeFirstLetter, getRatingStyle, pluralize} from '../../utils/utils';

type OfferDescription = {
  offer: TOfferDetailed;
}

function OfferDescription({offer}: OfferDescription) {
  const {
    id,
    title,
    type,
    price,
    isPremium,
    isFavorite,
    rating,
    description,
    bedrooms,
    maxAdults,
    goods,
    host
  } = offer;

  const {name, isPro, avatarUrl} = host;

  return (
    <Fragment>
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <BookmarkButton isFavorite={isFavorite} place={BookmarkPlace.Offer} />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: getRatingStyle(rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} {pluralize('Bedroom', bedrooms)}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} {pluralize('adult', maxAdults)}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <div className="offer__inside">
        <h2 className="offer__inside-title">What&apos;s inside</h2>
        {goods.length > 0 && (
          <ul className="offer__inside-list">
            {goods.map((item) => (
              <li key={`${id}-${item}`} className="offer__inside-item">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="offer__host">
        <h2 className="offer__host-title">Meet the host</h2>
        <div className="offer__host-user user">
          <div className={`offer__avatar-wrapper ${isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
            <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt={`${name}avatar`}/>
          </div>
          <span className="offer__user-name">{name}</span>
          {isPro && (
            <span className="offer__user-status">Pro</span>
          )}
        </div>
        <div className="offer__description">
          <p className="offer__text">
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default OfferDescription;
