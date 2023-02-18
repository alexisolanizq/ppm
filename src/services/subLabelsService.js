import HttpClient from './api/HttpClient';
import {
  API_SUBLABELS,
  API_COUNTRIES,
  API_CATALOG_GENERICS,
  API_JOBAREAS_REFERENCE_TYPES
} from '@Const/constUrls';

export default class SubLabelsService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new SubLabelsService();
    }

    return this.classInstance;
  }

  getSubLabels = () =>
    this.instance.get(API_SUBLABELS).then((response) => response.data);

  getGrl = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/10?language_id=1`)
      .then((response) => response.data);

  getSubTagsTypesData = () =>
    this.instance.get(API_SUBLABELS).then((response) => response.data);

  getJobAreasReferenceTypes = async () =>
    this.instance
      .get(API_JOBAREAS_REFERENCE_TYPES)
      .then(
        (response) => response.data,
        (error) => error
      );

  countriesList = async () =>
    this.instance.get(API_COUNTRIES).then((response) => response.data);

  createSubLabels = (payload) => {
    const data = payload || {};

    return this.instance.post(API_SUBLABELS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateSubLabels = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_SUBLABELS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
