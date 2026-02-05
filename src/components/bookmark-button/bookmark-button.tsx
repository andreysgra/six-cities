import {BookmarkPlace} from '../../const';

type BookmarkButtonProps = {
  isFavorite: boolean;
  place?: BookmarkPlace;
}

function BookmarkButton({isFavorite, place = BookmarkPlace.PlaceCard}: BookmarkButtonProps) {
  const activeBookmarkClassName = () =>
    isFavorite ? `${place}__bookmark-button--active` : '';

  return (
    <button
      className={`${place}__bookmark-button button ${activeBookmarkClassName()}`}
      type="button"
    >
      <svg
        className={`${place}__bookmark-icon`}
        width={place === BookmarkPlace.PlaceCard ? 18 : 31}
        height={place === BookmarkPlace.PlaceCard ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'From' : 'To'} bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
