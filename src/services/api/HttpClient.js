
import axios from 'axios';

import {
  API_EMAIL_TOKEN,
  API_TOKEN
} from '@Const/constUrls';
import { API_URL } from '@Const/config';
import { STORAGE_ID_TOKEN } from '@Const/storage';
import { handleError } from '@Utils/handleError';
import { getAccessToken } from '@Utils/auth';

export default class HttpClient {
  constructor() {
    this.baseURL = API_URL;
    this.instance = axios.create({
      baseURL: API_URL
    });
    this.API_EMAIL_TOKEN = API_EMAIL_TOKEN;
    this.API_TOKEN = API_TOKEN;

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => response,
      handleError
    );
  };

  // eslint-disable-next-line class-methods-use-this
  handleRequest = (config) => {
    const accessToken = getAccessToken()
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  };

  async refreshToken() {
    const tokenID = localStorage.getItem(STORAGE_ID_TOKEN) || '';
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const userEmail = await axios
      .get(
        `${this.baseURL}${this.API_EMAIL_TOKEN}?token_id=${tokenID}`,
        options
      )
      .then((response) => response.data);

    return axios
      .post(`${this.baseURL}${this.API_TOKEN}?email=${userEmail}`, options)
      .then((response) => response);
  }
}