import HttpClient from '../api/HttpClient';
import { API_IMPI_DOCUMENTS, API_NOTIFICATIONS_IMPI, API_REMINDERS, } from '@Const/constUrls';

export default class ImpiDocumentsService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ImpiDocumentsService();
    }

    return this.classInstance;
  }

  getImpiDocuments = () =>
    this.instance.get(API_IMPI_DOCUMENTS).then((response) => response.data);
  
  getReminders = () =>
    this.instance.get(API_REMINDERS).then((response) => response.data);

  getNotifications = () =>
    this.instance.get(API_NOTIFICATIONS_IMPI).then((response) => response.data);

  createImpiDocuments = (payload) => {
    const data = payload || {};

    return this.instance.post(API_IMPI_DOCUMENTS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
 
  createDocumentNotification = (payload) => {
    const data = payload || {};

    return this.instance.post(API_NOTIFICATIONS_IMPI, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
 
  createDocumentRemainder = (payload) => {
    const data = payload || {};

    return this.instance.post(API_REMINDERS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateImpiDocuments = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_IMPI_DOCUMENTS}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateImpiDocumentsReminder = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_REMINDERS}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateImpiDocumentsNotification = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_NOTIFICATIONS_IMPI}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
