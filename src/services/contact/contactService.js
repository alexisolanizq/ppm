import { API_CONTACTS } from '@Const/constUrls';
import HttpClient from '@Services/api/HttpClient';

export default class ContactService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ContactService();
    }
    return this.classInstance;
  }

  getContacts = async () =>
    this.instance.get(API_CONTACTS).then((response) => response.data);

  createContact = (payload) => {
    const data = payload || {};
    return this.instance.post(API_CONTACTS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateContact = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_CONTACTS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
