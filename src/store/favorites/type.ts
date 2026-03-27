import {TOffers} from '../../types/offer';
import {RequestStatus} from '../../services/api/const';

export type TFavoriteOffersState = {
  favoriteOffers: TOffers;
  addingStatus: RequestStatus;
  loadingStatus: RequestStatus;
}
