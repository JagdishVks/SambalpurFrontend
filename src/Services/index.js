import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://localhost:7044/api/', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json'
  },
});