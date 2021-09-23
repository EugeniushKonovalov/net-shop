import axios from "axios";

const $host = axios.create({
  baseUrl: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$host.interceptors.request.use(authInterceptor);

export { $host };