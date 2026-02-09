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

export function shuffleArray<T>(array: T[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
  }

  return shuffled;
}
