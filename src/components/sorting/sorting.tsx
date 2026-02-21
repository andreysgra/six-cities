import {useState} from 'react';
import {SortingType} from '../../const';
import {TSortOption} from '../../types/sorting';
import classNames from 'classnames';

type SortingProps = {
  activeSorting: TSortOption;
  onChange: (option: TSortOption) => void;
}

function Sorting({activeSorting, onChange}: SortingProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleClick = () => setIsOpened(!isOpened);

  const handleSortItemClick = (option: TSortOption) => {
    setIsOpened(false);
    onChange(option);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleClick}>
        {SortingType[activeSorting]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(SortingType).map(([option, title]) => (
            <li
              key={option}
              className={classNames('places__option', {'places__option--active': activeSorting === option})}
              tabIndex={0}
              onClick={() => handleSortItemClick(option as TSortOption)}
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Sorting;
