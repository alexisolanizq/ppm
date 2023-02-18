import axios from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export default class CustomHttpClient {
  constructor(url = null, requestHeaders = null, responseType = null) {
    this.instance = axios.create({
      baseURL: url ?? 'http://localhost:3000/api/',
      timeout: 30000,
      headers: requestHeaders ?? defaultHeaders,
      responseType: responseType ?? 'json'
    });
  }
}
