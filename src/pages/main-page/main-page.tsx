import {TOffers} from '../../types/offer';
import Cities from '../../components/cities/cities';
import CitiesList from '../../components/cities-list/cities-list';

type MainPageProps = {
  offers: TOffers;
}

function MainPage({offers}: MainPageProps) {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList />
        </section>
      </div>
      <Cities offers={offers} />
    </main>
  );
}

export default MainPage;
