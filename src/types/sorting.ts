import {SortingType} from '../const';
import {TOffer} from './offer';

export type TSortOption = keyof typeof SortingType;

export type TSorterOffers = {
  [key in TSortOption]: (a: TOffer, b: TOffer) => number
}
