import {TOffers} from '../../types/offer';

export type TOffersState = {
  offers: TOffers;
  nearByOffers: TOffers;
  isOffersLoading: boolean;
}
