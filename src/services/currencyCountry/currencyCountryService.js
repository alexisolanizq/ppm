import HttpClient from '@Services/api/HttpClient';
import {
  API_COUNTRIES,
  API_COUNTRY_CURRENCY,
} from '@Const/constUrls';

export default class CurrencyCountryService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new CurrencyCountryService();
    }
    return this.classInstance;
  }

  currencyCountryList = async () =>
    this.instance.get(API_COUNTRY_CURRENCY).then(
      (response) => response,
      (error) => error
    );

  createCountryCurrency = async (data) =>
    this.instance.post(API_COUNTRY_CURRENCY, data).then(
      (response) => response,
      (error) => error
    );

  updateCountryCurrency = async (id, data) =>
    this.instance.put(`${API_COUNTRY_CURRENCY}/${id}`, data).then(
      (response) => response,
      (error) => error
    );

  countriesList = async () =>
    this.instance.get(API_COUNTRIES).then(
      (response) => response.data,
      (error) => error
    );
}
