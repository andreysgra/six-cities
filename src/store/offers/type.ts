import {TOffers} from '../../types/offer';
import {RequestStatus} from '../../services/api/const';

export type TOffersState = {
  offers: TOffers;
  nearByOffers: TOffers;
  loadingStatus: RequestStatus;
}
