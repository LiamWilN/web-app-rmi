import axios from "axios";
import Cookies from "js-cookie";
import BASE_URL from "../libs/constants";

const URL = BASE_URL;

const instance = axios.create({
  baseURL: URL,
  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
