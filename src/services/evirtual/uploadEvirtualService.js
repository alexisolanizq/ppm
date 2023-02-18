import HttpClient from '../api/HttpClient';
import { API_EVIRTUAL } from '@Const/constUrls';

export default class UploadEvirtualService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UploadEvirtualService();
    }

    return this.classInstance;
  }

  createEvirtual = (data, entity) =>
    this.instance.post(`${API_EVIRTUAL}/${entity}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
}
