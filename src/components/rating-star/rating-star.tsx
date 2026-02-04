import {ChangeEvent, Fragment} from 'react';
import {RATINGS} from '../../const';

type RatingStarProps = {
  value: number;
  rating: number;
  title: typeof RATINGS[number];
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({value, rating, title, onChange}: RatingStarProps) {
  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) => onChange(evt);

  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={value === rating}
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingStar;
