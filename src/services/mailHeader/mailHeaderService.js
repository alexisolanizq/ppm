import HttpClient from '../api/HttpClient';
import {
  API_OFFICE_EMAIL_HEADERS,
  API_CLIENT_EMAIL_HEADERS,
  API_HOLDER_EMAIL_HEADERS,
  API_OFFICE_EMAIL_HEADERS_VARIABLE
} from '@Const/constUrls';

export default class MailHeaderService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MailHeaderService();
    }

    return this.classInstance;
  }
  
  getOfficeEmailHeaders = () =>
    this.instance.get(`${API_OFFICE_EMAIL_HEADERS}`).then((response) => response.data);
 
  getClientEmailHeaders = () =>
    this.instance.get(`${API_CLIENT_EMAIL_HEADERS}`).then((response) => response.data);
  
  getHolderEmailHeaders = () =>
    this.instance.get(`${API_HOLDER_EMAIL_HEADERS}`).then((response) => response.data);
  
  createOfficeEmailHeaders = (payload) => {
    const data = payload || {};

    return this.instance.post(API_OFFICE_EMAIL_HEADERS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
  
  createClientEmailHeaders = (payload) => {
    const data = payload || {};

    return this.instance.post(API_CLIENT_EMAIL_HEADERS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
  
  createHolderEmailHeaders = (payload) => {
    const data = payload || {};

    return this.instance.post(API_HOLDER_EMAIL_HEADERS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createHolderEmailHeadersVariable = (payload) => {
    const data = payload || {};

    return this.instance.post(API_OFFICE_EMAIL_HEADERS_VARIABLE, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
