import HttpOffice from '../api/HttpClient';
import {
  API_CLIENT_RECIPIENT
} from '@Const/constUrls';

export default class RecipientService extends HttpOffice {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new RecipientService();
    }

    return this.classInstance;
  }

  getClientRecipient = () =>
    this.instance.get(`${API_CLIENT_RECIPIENT}`).then((response) => response.data);

  createClientRecipient = (payload) => {
    const data = payload || {};

    return this.instance.post(API_CLIENT_RECIPIENT, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
