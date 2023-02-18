import Axios from 'axios'
import { handleError } from '@Utils/handleError';
import { API_URL } from '@Const/config';
import { getAccessToken } from '@Utils/auth';

const axiosInstance = Axios.create({
  baseURL: API_URL
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken()
  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})
axiosInstance.interceptors.response.use((response) => response, handleError);

export default axiosInstance