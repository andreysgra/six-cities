import {STARS_COUNT} from '../const';
import {TReview} from '../types/review';
import {TOffer} from '../types/offer';
import {TSorterOffers} from '../types/sorting';

const MAX_PERCENT_WIDTH = 100;

export const getRatingStyle = (rating: number): string =>
  `${MAX_PERCENT_WIDTH * Math.round(rating) / STARS_COUNT}%`;

export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long'});

export const sortReviewsByDate = (reviewA: TReview, reviewB: TReview): number =>
  new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime();

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[random]] = [shuffled[random], shuffled[i]];
  }

  return shuffled;
};

export const pluralize = (str: string, count: number): string => count === 1 ? str : `${str}s`;

export const SorterOffers: TSorterOffers = {
  Popular: () => 0,
  PriceAsc: (a: TOffer, b: TOffer) => a.price - b.price,
  PriceDesc: (a: TOffer, b: TOffer) => b.price - a.price,
  TopRated: (a: TOffer, b: TOffer) => b.rating - a.rating
};
