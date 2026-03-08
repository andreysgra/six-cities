import './offer-error.css';

function OfferError() {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer__wrapper offer__error">
          <h1 className="offer__name">Something went wrong</h1>
          <p className="offer__text">We couldn&apos;t load the offer. Please try again later.</p>
        </div>
      </div>
    </section>
  );
}

export default OfferError;
