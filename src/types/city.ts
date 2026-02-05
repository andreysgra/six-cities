import {TLocation} from './location';
import {Cities} from '../const';

export type TCityName = typeof Cities[number];

export type TCity = {
  name: TCityName;
  location: TLocation;
}
