import HttpOffice from '../api/HttpClient';
import {
  API_LANGUAGES,
  API_COUNTRIES_LANGUAGES,
  API_CATALOG_GENERICS,
  API_OFFICE
} from '@Const/constUrls';

export default class OfficeService extends HttpOffice {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new OfficeService();
    }

    return this.classInstance;
  }

  getOffices = () =>
    this.instance.get(`${API_OFFICE}`).then((response) => response.data);
 
  getOffice = (id) =>
    this.instance.get(`${API_OFFICE}/${id}`).then((response) => response.data);
  
  getOfficesAgent = (id) =>
    this.instance.get(`${API_OFFICE}/agent/${id}`).then((response) => response.data);
  
  getLanguages = () =>
    this.instance.get(API_LANGUAGES).then((response) => response.data);

  getPersonTypes = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/14?language_id=1`)
      .then((response) => response.data);

  getExpirationUnit = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/1?language_id=1`)
      .then((response) => response.data);

  getNationality = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/19?language_id=1`)
      .then((response) => response.data);

  getCountriesLanguages = () =>
    this.instance
      .get(API_COUNTRIES_LANGUAGES)
      .then((response) => response.data);

  createOffice = (payload) => {
    const data = payload || {};

    return this.instance.post(API_OFFICE, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateOffice = (payload) => {
    const data = payload || {};
    return this.instance.put(`${API_OFFICE}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
