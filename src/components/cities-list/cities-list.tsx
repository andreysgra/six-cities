import {Cities} from '../../const';
import CityItem from '../city-item/city-item';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setCity} from '../../store/action';
import {TCityName} from '../../types/city';

function CitiesList() {
  const activeCity = useAppSelector((state) => state.city);
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
