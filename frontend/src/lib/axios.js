import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api", // Vite proxy will forward to http://localhost:3000/api
  withCredentials: true, // send cookies if backend sets them
});
