import { API_URL } from '@Const/config';
import axios from 'axios';

// Default header
const requestHeaders = {
  'Content-Type': 'application/json'
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: requestHeaders
});

export default axiosInstance;
