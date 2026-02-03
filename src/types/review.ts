import {TUser} from './user';

export type TReview = {
  id: string;
  date: string;
  user: Pick<TUser, 'avatarUrl' | 'name' | 'isPro'>;
  comment: string;
  rating: number;
}

export type TReviews = TReview[];
