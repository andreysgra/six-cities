import axios, {AxiosError, AxiosInstance, HttpStatusCode, InternalAxiosRequestConfig} from 'axios';
import {BASE_URL, REQUEST_TIMEOUT} from './const';
import {getToken} from '../token';
import {toast} from 'react-toastify';
import {ResponseError} from './type';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ResponseError>) => {
      toast.dismiss();

      if (error.response?.status !== HttpStatusCode.Unauthorized) {
        toast.error(error.response ? error.response.data.message : error.message);
      }

      return Promise.reject(error);
    });

  return api;
};
