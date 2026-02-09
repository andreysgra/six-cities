import {STARS_COUNT} from '../const';
import {TReview} from '../types/review';

const MAX_PERCENT_WIDTH = 100;

export const getRatingStyle = (rating: number) =>
  `${MAX_PERCENT_WIDTH * Math.round(rating) / STARS_COUNT}%`;

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});
}

export function sortReviewsByDate(reviewA: TReview, reviewB: TReview): number {
  return new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime();
}
