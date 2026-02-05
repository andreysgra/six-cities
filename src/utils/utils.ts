import {STARS_COUNT} from '../const';

const MAX_PERCENT_WIDTH = 100;

export const getRatingStyle = (rating: number) =>
  `${MAX_PERCENT_WIDTH * Math.round(rating) / STARS_COUNT}%`;

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
