import {TOfferDetailed} from '../../types/offer';
import {RequestStatus} from '../../services/api/const';

export type TOfferState = {
  offer: TOfferDetailed | null;
  loadingStatus: RequestStatus;
}
