import HttpClient from '../api/HttpClient';
import {
  API_INSTRUCTIONS_TYPES,
  API_INSTRUCTIONSTYPES_PAYMENTSRIGHTS,
  API_PAYMENT_RIGHTS,
  API_PPM_DOCUMENTS
} from '@Const/constUrls';

export default class InstructionsService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new InstructionsService();
    }

    return this.classInstance;
  }

  getInstructions = () =>
    this.instance.get(API_INSTRUCTIONS_TYPES).then((response) => response.data);

  getInstructionsTypesPayments = () =>
    this.instance
      .get(API_INSTRUCTIONSTYPES_PAYMENTSRIGHTS)
      .then((response) => response.data);

  getPaymentRight = () =>
    this.instance.get(API_PAYMENT_RIGHTS).then((response) => response.data);

  getPPMDocuments = () =>
    this.instance.get(API_PPM_DOCUMENTS).then((response) => response.data);

  createInstructions = (payload) => {
    const data = payload || {};

    return this.instance.post(API_INSTRUCTIONS_TYPES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createPaymentsRight = (payload) => {
    const data = payload || {};

    return this.instance.post(API_INSTRUCTIONSTYPES_PAYMENTSRIGHTS, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateInstructions = (id, payload) => {
    const data = payload || {};
    return this.instance
      .put(`${API_INSTRUCTIONSTYPES_PAYMENTSRIGHTS}/${id}`, data)
      .then(
        (response) => response,
        (error) => {
          throw error;
        }
      );
  };
}
