import HttpClient from '../api/HttpClient';
import {
  API_NOTICES,
  API_NOTICES_USER,
  API_NOTICES_INVOICE,
  API_NOTICES_JOBAREA,
  API_AREA_INVOICE_CONCEPT,
  API_JOB_AREAS_USER
} from '@Const/constUrls';

export default class NoticeNameService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new NoticeNameService();
    }

    return this.classInstance;
  }
  
  getNotices = () =>
  this.instance.get(API_NOTICES).then((response) => response.data);

  getNoticeUser = () =>
  this.instance.get(API_NOTICES_USER).then((response) => response.data);

  getNoticeInvoice = () =>
  this.instance.get(API_NOTICES_INVOICE).then((response) => response.data);
  
  getNoticeJobArea = () =>
  this.instance.get(API_NOTICES_JOBAREA).then((response) => response.data);

  getAreaInvoiceConcept = () =>
  this.instance.get(API_AREA_INVOICE_CONCEPT).then((response) => response.data);
 

  getJobAreaUserData = () =>
  this.instance.get(API_JOB_AREAS_USER).then((response) => response.data);

  createNotices = (payload) => {
    const data = payload || {};

    return this.instance.post(`${API_NOTICES}/`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createUserNotice = (payload) => {
    const data = payload || {};
    return this.instance.post(`${API_NOTICES_USER}/`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createInvoiceNotice = (payload) => {
    const data = payload || {};
    return this.instance.post(`${API_NOTICES_INVOICE}/`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createJobAreaNotice = (payload) => {
    const data = payload || {};
    return this.instance.post(`${API_NOTICES_JOBAREA}/`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateNotices = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_NOTICES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateInvoiceNotices = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_NOTICES_INVOICE}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateJobAreaNotice = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_NOTICES_JOBAREA}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateUserNotices = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_NOTICES_USER}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}