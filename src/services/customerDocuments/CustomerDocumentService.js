import HttpClient from '@Services/api/HttpClient';
import {
  API_COSTUMER_DOCUMENTS,
  API_CATALOG_GENERICS,
  GET_JOBAREAS_PROCEDUREPHASES,
  API_JOB_AREAS
} from '@Const/constUrls';

export default class CustomerDocumentService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new CustomerDocumentService();
    }

    return this.classInstance;
  }

  getCustomerDocuments = async () =>
    this.instance.get(API_COSTUMER_DOCUMENTS).then(
      (response) => response,
      (error) => error
    );

  getJobAreas = () =>
    this.instance.get(API_JOB_AREAS).then((response) => response);

  getJobAreasProcedurePhases = async (id) =>
    this.instance.get(`${GET_JOBAREAS_PROCEDUREPHASES}?job-area-id=${id}`).then(
      (response) => response,
      (error) => error
    );

  getChargeTypes = async () =>
    this.instance.get(`${API_CATALOG_GENERICS}/4?language_id=1`).then(
      (response) => response,
      (error) => error
    );

  getExpirationUnits = async () =>
    this.instance.get(`${API_CATALOG_GENERICS}/1?language_id=1`).then(
      (response) => response,
      (error) => error
    );

  createCustomerDocument = async (data) =>
    this.instance.post(API_COSTUMER_DOCUMENTS, data).then(
      (response) => response,
      (error) => error
    );

  updateCustomerDocument = async (id, data) =>
    this.instance.put(`${API_COSTUMER_DOCUMENTS}/${id}`, data).then(
      (response) => response,
      (error) => error
    );
}
