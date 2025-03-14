import axios from 'axios';

const API_KEY = '49318399-651ca0146c73ba5cb36d392c8';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  };

  return axios.get(BASE_URL, { params });
}
