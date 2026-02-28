import {TReviews} from '../../types/review';
import {SubmitStatus} from '../../services/api/const';

export type TCommentsState = {
  comments: TReviews;
  commentStatus: SubmitStatus;
}
