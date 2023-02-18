import HttpClient from '../api/HttpClient';
import {
  API_TOKEN_ID,
  API_EMAIL_TOKEN,
  API_TOKEN,
  API_VALIDATE_TOKEN
} from '@Const/constUrls';

export default class AuthService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AuthService();
    }

    return this.classInstance;
  }

  getTokenID = (scope, code, debug = 'false') =>
    this.instance
      .get(`${API_TOKEN_ID}?scope=${scope}&code=${code}&develop=${debug}`)
      .then((response) => response.data);

  getEmail = (idToken) =>
    this.instance
      .get(`${API_EMAIL_TOKEN}?token_id=${idToken}`)
      .then((response) => response.data);

  getToken = (email) =>
    this.instance
      .post(`${API_TOKEN}?email=${email}`)
      .then((response) => response.data);

  getValidateToken = (token) =>
    this.instance.post(`${API_VALIDATE_TOKEN}?token=${token}`).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
}
