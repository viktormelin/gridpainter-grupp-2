import { IUser } from '../models/IUser';

export const fetchUser = () => {
  const data = sessionStorage.getItem('user');

  if (data) {
    return JSON.parse(data) as IUser;
  }

  return null;
};
