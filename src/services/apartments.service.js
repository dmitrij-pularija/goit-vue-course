import axios from '../utils/axios';

export const getCitiesList = () => {
  return axios.get('/cities');
};

export const getApartmentsList = () => {
  return axios.get('/apartments');
};

export const getApartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};