import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {CommentLength, ErrorMessage, RATINGS, STARS_COUNT, SuccessMessage} from '../../const';
import RatingStar from '../rating-star/rating-star';
import {TReviewContent} from '../../types/review';
import {useAppSelector} from '../../hooks/use-app-selector';
import {
  getIsCommentSubmitFailed,
  getIsCommentSubmitSuccess,
  getIsCommentSubmitting
} from '../../store/comments/selectors';
import {toast} from 'react-toastify';
import {TOffer} from '../../types/offer';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {postComment} from '../../store/comments/api-actions';

type ReviewFormProps = {
  id: TOffer['id'];
}

function ReviewForm({id}: ReviewFormProps) {
  const isSubmitting = useAppSelector(getIsCommentSubmitting);
  const isSubmitSuccess = useAppSelector(getIsCommentSubmitSuccess);
  const isSubmitFailed = useAppSelector(getIsCommentSubmitFailed);

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSubmitSuccess) {
      toast.success(SuccessMessage.ReviewSubmit);

      setRating(0);
      setComment('');
    }

    if (isSubmitFailed) {
      toast.error(ErrorMessage.ReviewSubmit);
    }
  }, [isSubmitSuccess, isSubmitFailed]);

  const handleRadioChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setRating(Number(evt.target.value));

  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postComment({id, comment, rating} as TReviewContent));
  };

  const isDisabled = isSubmitting || !rating ||
    (comment.length < CommentLength.Min || comment.length > CommentLength.Max);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
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
        value={comment}
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
