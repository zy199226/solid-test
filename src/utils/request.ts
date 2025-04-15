import axios from 'axios';
import { toast } from 'solid-toast';

const request = axios.create({
  baseURL: '/activity-api/custom-page/h5',
  timeout: 10000,
});

request.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token');
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => Promise.reject(error),
);

request.interceptors.response.use(
  (response) => {
    if ([10002, 10003, 10006].includes(response.data.code)) {
      window.location.replace('/custom-page/exception?code=' + response.data.code);
    }
    if (response.data.code !== 200) {
      toast.error(response.data.msg);
      return Promise.reject(response.data.msg);
    }
    return response.data;
  },
  (error) => Promise.reject(error),
);

export default request;
