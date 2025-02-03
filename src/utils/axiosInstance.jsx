import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'https://testpatience.onrender.com/api/v1', // Replace with your API URL
   baseURL: import.meta.mode === "development" ? "https://patient.ng:8081/api/v1" : "https://patient.ng:8081/api/v1",
   //baseURL: import.meta.mode === "development" ? "http://77.37.124.96:8081/api/v1" : "http://77.37.124.96:8081/api/v1",
  withCredentials: true,
  //timeout: 1000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance; 