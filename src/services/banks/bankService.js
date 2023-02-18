import HttpClient from '@Services/api/HttpClient';
import { API_BANKS } from '@Const/constUrls';

export default class BankService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new BankService();
    }

    return this.classInstance;
  }

  getBanks = () => this.instance.get(API_BANKS).then((response) => response);

  createBank = (payload) => {
    const data = payload || {};

    return this.instance.post(API_BANKS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateBank = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_BANKS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
