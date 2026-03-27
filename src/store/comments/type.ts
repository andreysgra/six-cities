import {TReviews} from '../../types/review';
import {RequestStatus} from '../../services/api/const';

export type TCommentsState = {
  comments: TReviews;
  submitStatus: RequestStatus;
}
