import { IUser } from '../models/IUser';

const USER_URL = `${import.meta.env.VITE_BASE_URI}/api/user`;

export const fetchUser = async () => {
  const data = sessionStorage.getItem('user');

  if (data) {
    const user = JSON.parse(data);

    if (user) {
      const response = await fetch(`${USER_URL}/get`, {
        method: 'POST',
        body: JSON.stringify({ users: [user] }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      return data[0] as IUser;
    }
  }

  return null;
};

export const loginUser = async (username: string) => {
  const response = await fetch(`${USER_URL}/add`, {
    method: 'POST',
    body: JSON.stringify({ username }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (data.message) {
    return null;
  } else {
    return data as IUser;
  }
};
