import {TOffer} from '../../types/offer';
import {capitalizeFirstLetter, getRatingStyle} from '../../utils/utils';
import {Link} from 'react-router-dom';
import {AppRoute, OfferPlace} from '../../const';

type PlaceCardProps = {
  offer: TOffer;
  place?: OfferPlace;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
}

function PlaceCard({
  offer,
  place = OfferPlace.City,
  onMouseEnter = () => undefined,
  onMouseLeave = () => undefined
}: PlaceCardProps) {
  const {
    id,
    title,
    type,
    price,
    isPremium,
    rating,
    previewImage
  } = offer;

  const handleMouseEnter = () => onMouseEnter(id);
  const handleMouseLeave = () => onMouseLeave();

  return (
    <article
      className={`${place}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={(place === OfferPlace.Favorite) ? 150 : 260}
            height={(place === OfferPlace.Favorite) ? 110 : 200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price} </b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStyle(rating)}}/>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
