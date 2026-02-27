import {Cities} from '../../const';
import CityItem from '../city-item/city-item';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {TCityName} from '../../types/city';
import {getCity} from '../../store/site-process/selectors';
import {setCity} from '../../store/site-process/slice';

function CitiesList() {
  const activeCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();

  const handleItemClick = (name: TCityName) => dispatch(setCity(name));

  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <CityItem key={city} name={city} isActive={city === activeCity} onClick={handleItemClick} />
      ))}
    </ul>
  );
}

export default CitiesList;
