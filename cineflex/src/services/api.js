import axios from 'axios';

export const image_path_w500 = 'https://image.tmdb.org/t/p/w500';
export const image_path_w1280 = 'https://image.tmdb.org/t/p/w1280';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'pt-BR',
  },
});

export default api;