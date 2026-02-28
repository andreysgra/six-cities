import {TOffers} from '../../types/offer';

export type TOffersState = {
  offers: TOffers;
  nearByOffers: TOffers;
  favoriteOffers: TOffers;
  isOffersLoading: boolean;
  isFavoriteOffersLoading: boolean;
}
