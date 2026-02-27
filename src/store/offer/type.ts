import {TOfferDetailed} from '../../types/offer';

export type TOfferState = {
  offer: TOfferDetailed | null;
  isOfferLoading: boolean;
}
