import axios, { AxiosInstance } from "axios";
import defaultConfig from "./config";

export const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: defaultConfig.Base_URL,
  headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});

export const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err: any) => {
      Promise.reject(err);
    }
  );
};