import {TCityName} from '../../types/city';
import {MouseEvent} from 'react';
import classNames from 'classnames';

type CityItemProps = {
  name: TCityName;
  isActive: boolean;
  onClick: (name: TCityName) => void;
}

function CityItem({name, isActive, onClick}: CityItemProps) {
  const handleCityItemClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(name);
  };

  return (
    <li className="locations__item">
      <a
        className={classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})}
        href="#"
        onClick={handleCityItemClick}
      >
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CityItem;
