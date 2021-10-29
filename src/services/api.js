import axios from 'axios';
import { getToken } from './auth'

const api = axios.create({
  baseURL: 'https://q50wzro7b2.execute-api.us-east-1.amazonaws.com'
});

api.interceptors.request.use((config) => {
  const token = getToken();
  config.headers.authorization = `Bearer ${token}`
  return config;
});

export async function createMovie(data) {
  const response = await api.post("/movies", data);
  console.log("Movie Created", response);
  return response;
}

export async function getMovies() {
  const response = await api.get('/movies');
  console.log("Get Movies", response);
  return response;
}

export async function authenticate(login, password) {
  const response = await api.post("/authenticate", {
    login: login,
    password: password
  });
  console.log("Login");
  return response;
}