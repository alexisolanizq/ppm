import HttpClient from '@Services/api/HttpClient';
import { API_COUNTRIES } from '@Const/constUrls';

export default class CountriesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new CountriesService();
    }
    return this.classInstance;
  }
  
  getCountries = () =>
    this.instance.get(API_COUNTRIES).then((response) => response.data);

  createCountries = (payload) => {
    const data = payload || {};

    return this.instance.post(API_COUNTRIES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateCountries = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_COUNTRIES}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
