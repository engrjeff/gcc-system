import axios from "axios";

const API_URL = "http://localhost:5000";

const runAxiosInterceptor = () => {
  axios.interceptors.request.use(config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [API_URL];
    const 
  })
}