import HttpClient from '@Services/api/HttpClient';
import { API_DEFAULT_NOTES, GET_PRIORITIES } from '@Const/constUrls';

export default class DefaultNotesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new DefaultNotesService();
    }

    return this.classInstance;
  }

  getDefaultNotes = () =>
    this.instance.get(API_DEFAULT_NOTES).then((response) => response);

  getPriorities = () =>
    this.instance.get(GET_PRIORITIES).then((response) => response);

  createDefaultNote = (payload) => {
    const data = payload || {};

    return this.instance.post(API_DEFAULT_NOTES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateDefaultNote = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_DEFAULT_NOTES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
