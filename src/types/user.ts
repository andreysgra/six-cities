export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export type TUserAuth = Pick<TUser, 'email'> & { password: string };
