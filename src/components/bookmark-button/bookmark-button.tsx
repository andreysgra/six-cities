import {BookmarkPlace} from '../../const';
import {TOffer} from '../../types/offer';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsAuthorized} from '../../store/user/selectors';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setFavorite} from '../../store/favorites/api-actions';
import {FavoriteStatus} from '../../services/api/const';
import classNames from 'classnames';
import {getIsFavoriteAdding} from '../../store/favorites/selectors';

type BookmarkButtonProps = {
  id: TOffer['id'];
  isFavorite: boolean;
  place?: BookmarkPlace;
}

function BookmarkButton({id, isFavorite, place = BookmarkPlace.PlaceCard}: BookmarkButtonProps) {
  const isAuthorized = useAppSelector(getIsAuthorized);
  const isFavoriteAdding = useAppSelector(getIsFavoriteAdding);

  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setFavorite({
      id,
      status: isFavorite ? FavoriteStatus.Off : FavoriteStatus.On
    }));
  };

  const bookmarkClassName = classNames(
    `${place}__bookmark-button button`, {[`${place}__bookmark-button--active`]: isFavorite && isAuthorized});

  return (
    <button className={bookmarkClassName} type="button" onClick={handleButtonClick} disabled={isFavoriteAdding}>
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
