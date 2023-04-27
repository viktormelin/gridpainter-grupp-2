import { Image } from '../models/IImage';

const IMAGE_URL = `${import.meta.env.VITE_BASE_URI}/api/images`;

export const fetchImages = async () => {
  const response = await fetch(`${IMAGE_URL}/getAll`, { method: 'GET' });

  const data = await response.json();
  return data as Image[];
};
