import axios from "axios";
import { getEnv } from "../helpers";
import { AxiosInstance } from "axios";


const { VITE_API_URL } = getEnv();

const p2pApi: AxiosInstance = axios.create({
  baseURL: VITE_API_URL,
});

/// interceptores

p2pApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`

  return config;
});

export default p2pApi;
