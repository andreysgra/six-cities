import {useEffect} from 'react';
import NearPlacesList from '../../components/near-places-list/near-places-list';
import {NEARBY_OFFERS_COUNT} from '../../const';
import {shuffleArray} from '../../utils/utils';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useParams} from 'react-router-dom';
import {getNearByOffers} from '../../store/offers/selectors';
import {fetchNearbyOffers} from '../../store/offers/api-actions';
import Offer from '../../components/offer/offer';

function OfferPage() {
  const nearByOffers = useAppSelector(getNearByOffers);

  const dispatch = useAppDispatch();

  const id = useParams().id as string;

  useEffect(() => {
    if (id) {
      dispatch(fetchNearbyOffers(id));
    }
  }, [id, dispatch]);

  const randomNearByOffers = shuffleArray(nearByOffers).slice(0, NEARBY_OFFERS_COUNT);

  return (
    <main className="page__main page__main--offer">
      <Offer id={id} nearByOffers={randomNearByOffers} />
      <div className="container">
        <NearPlacesList nearByOffers={randomNearByOffers} />
      </div>
    </main>
  );
}

export default OfferPage;
