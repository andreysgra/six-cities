import {ChangeEvent, useState} from 'react';
import {CommentLength, RATINGS, STARS_COUNT} from '../../const';
import RatingStar from '../rating-star/rating-star';

function ReviewForm() {
  const [rating, setRating] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setText(evt.target.value);
  };

  const isDisabled = !rating || (text.length < CommentLength.Min || text.length > CommentLength.Max);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((title, i: number) => (
          <RatingStar
            key={`star-${STARS_COUNT - i}`}
            value={STARS_COUNT - i}
            rating={rating}
            onChange={handleRadioChange}
            title={title}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={handleTextAreaChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{CommentLength.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
