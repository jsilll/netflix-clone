import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';

// base url to make rtequests to the movie database
const instance = axios.create({
  baseURL: API_URL,
});

export { instance, API_URL };
