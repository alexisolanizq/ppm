import HttpClient from '@Services/api/HttpClient';
import {
  API_PPM_DOCUMENTS,
  API_PROCEDURE_NANAGEMENT_ACTIONS,
  GET_DOCUMENT_TYPE,
  GET_CUSTOMER_LETTER_TYPE
} from '@Const/constUrls';

export default class PpmDocumentsService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PpmDocumentsService();
    }

    return this.classInstance;
  }

  getPPMDocuments = () =>
    this.instance.get(API_PPM_DOCUMENTS).then((response) => response);

  getPPMDocument = (id) =>
    this.instance
      .get(`${API_PPM_DOCUMENTS}/${id}`)
      .then((response) => response);

  getProcedureManagementActions = () =>
    this.instance
      .get(API_PROCEDURE_NANAGEMENT_ACTIONS)
      .then((response) => response);

  getDocumentType = () =>
    this.instance.get(GET_DOCUMENT_TYPE).then((response) => response);

  getCustomerLetterType = () =>
    this.instance.get(GET_CUSTOMER_LETTER_TYPE).then((response) => response);

  createPPMDocument = (payload) => {
    const data = payload || {};

    return this.instance.post(API_PPM_DOCUMENTS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updatePPMDocument = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_PPM_DOCUMENTS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
