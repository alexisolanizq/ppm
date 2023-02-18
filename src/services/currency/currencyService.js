import { API_CURRENCIES } from '@Const/constUrls';
import HttpClient from '@Services/api/HttpClient';

export default class CurrencyService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new CurrencyService();
    }
    return this.classInstance;
  }

  currencyList = async () =>
    this.instance.get(API_CURRENCIES).then(
      (response) => response.data,
      (error) => error
    );

  createCurrency = async (data) =>
    this.instance.post(API_CURRENCIES, data).then(
      (response) => response,
      (error) => error
    );

  updateCurrency = async (id, data) =>
    this.instance.put(`${API_CURRENCIES}/${id}`, data).then(
      (response) => response.status,
      (error) => error
    );
}
