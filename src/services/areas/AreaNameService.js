import { API_JOB_AREAS, GET_REFERENCE_TYPES } from '@Const/constUrls';
import HttpClient from '../api/HttpClient';

export default class AreaNameService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AreaNameService();
    }

    return this.classInstance;
  }

  listReferenceTypes = () =>
    this.instance.get(GET_REFERENCE_TYPES).then(
      (response) => response,
      (error) => error
    );

  listAreas = () =>
    this.instance.get(API_JOB_AREAS).then(
      (response) => response,
      (error) => error
    );

  createArea = async (payload) => {
    const data = payload || {};
    return this.instance.post(API_JOB_AREAS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateArea = async (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_JOB_AREAS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
