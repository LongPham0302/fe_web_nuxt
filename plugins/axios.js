import axios from "axios";
const apiUrl = process.env.apiUrl; // Lấy apiUrl từ biến môi trường


const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    accept: "application/json",
  },
});

export default axiosInstance;
