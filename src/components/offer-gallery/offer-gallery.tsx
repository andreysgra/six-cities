import {TOfferDetailed} from '../../types/offer';
import {MAX_OFFER_IMAGES_COUNT} from '../../const';

type OfferGalleryProps = {
  offer: TOfferDetailed;
}

function OfferGallery({offer}: OfferGalleryProps) {
  const {
    id,
    title,
    images,
  } = offer;

  return (
    <div className="offer__gallery">
      {images.map((image) => (
        <div key={`${id}-${image}`} className="offer__image-wrapper">
          <img className="offer__image" src={image} alt={title} />
        </div>
      )).slice(0, MAX_OFFER_IMAGES_COUNT)}
    </div>
  );
}

export default OfferGallery;
