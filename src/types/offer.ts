import {TCity} from './city';
import {TLocation} from './location';
import {TUser} from './user';
import {FavoriteStatus} from '../services/api/const';

export type TOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type TOffers = TOffer[];

export type TOfferDetailed = Omit<TOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Omit<TUser, 'email' | 'token'>;
  images: string[];
  maxAdults: number;
}

export type TFavoriteStatus = Pick<TOffer, 'id'> & {status: FavoriteStatus};
