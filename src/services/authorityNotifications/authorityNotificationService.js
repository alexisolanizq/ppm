import HttpClient from '@Services/api/HttpClient';
import {
  API_USERS,
  API_JOB_AREAS,
  API_SORTED_PHASES,
  API_IMPI_DOCUMENTS,
  API_CATALOG_GENERICS,
  API_AREA_SORTED_PHASES,
  API_AUTORITY_NOTIFICATION,
  API_AUTORITY_NOTIFICATION_PHASES
} from '@Const/constUrls';

export default class AuthorityNotificationService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new AuthorityNotificationService();
    }

    return this.classInstance;
  }

  getAutorityNotificationPhases = async () =>
    this.instance.get(API_AUTORITY_NOTIFICATION_PHASES).then(
      (response) => response,
      (error) => error
    );

  getJobAreas = () =>
    this.instance.get(API_JOB_AREAS).then((response) => response);

  getAreaSortedPhases = (id) =>
    this.instance
      .get(`${API_AREA_SORTED_PHASES}/job-area/${id}`)
      .then((response) => response);

  getSortedPhases = () =>
    this.instance.get(API_SORTED_PHASES).then((response) => response);

  getImpiDocuments = () =>
    this.instance.get(API_IMPI_DOCUMENTS).then((response) => response);

  getNotificationFequency = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/11?language_id=1`)
      .then((response) => response);

  getNotificationPeriod = () =>
    this.instance
      .get(`${API_CATALOG_GENERICS}/12?language_id=1`)
      .then((response) => response);

  getUsers = () => this.instance.get(API_USERS).then((response) => response);

  createAutorityNotification = (payload) => {
    const data = payload || {};

    return this.instance.post(API_AUTORITY_NOTIFICATION, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createAutorityNotificationPhases = (payload) => {
    const data = payload || {};

    return this.instance.post(API_AUTORITY_NOTIFICATION_PHASES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateAutorityNotificationPhases = (id, payload) => {
    const data = payload || {};

    return this.instance
      .put(`${API_AUTORITY_NOTIFICATION_PHASES}/${id}`, data)
      .then(
        (response) => response,
        (error) => {
          throw error;
        }
      );
  };
}
