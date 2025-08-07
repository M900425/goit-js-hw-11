import axios from 'axios';

const API_KEY = '51669150-fb97c08ffc3fd3823d92d526e';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => response.data);
}