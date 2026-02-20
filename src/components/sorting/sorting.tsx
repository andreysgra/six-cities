import {useState} from 'react';
import {SortingType} from '../../const';

function Sorting() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleClick = () => setIsOpened(!isOpened);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleClick}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.entries(SortingType).map(([option, title]) => (
            <li key={option} className="places__option" tabIndex={0}>{title}</li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default Sorting;
