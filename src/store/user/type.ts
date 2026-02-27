import {AuthorizationStatus} from '../../services/api/const';
import {TUser} from '../../types/user';

export type TUserState = {
  authorizationStatus: AuthorizationStatus;
  user: TUser['email'];
}
