import {TReviews} from '../../types/review';
import {MAX_REVIEWS_COUNT} from '../../const';
import Review from '../review/review';
import {sortReviewsByDate} from '../../utils/utils';

type ReviewsListProps = {
  reviews: TReviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortedReviews = [...reviews]
    .sort(sortReviewsByDate)
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sortedReviews.sort(sortReviewsByDate).map((review) => (
        <Review key={`review-${review.id}`} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
