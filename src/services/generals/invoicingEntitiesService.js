import HttpClient from '../api/HttpClient';
import {
  API_INVOICING_ENTITIES,
  GET_PERSON_TYPE,
  GET_PAY_METHOD,
  GET_REGIME,
  GET_WAY_PAY,
  GET_CFDI
} from '@Const/constUrls';

export default class InvoicingEntitiesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new InvoicingEntitiesService();
    }

    return this.classInstance;
  }

  getInvoicingEntities = () =>
    this.instance.get(API_INVOICING_ENTITIES).then((response) => response.data);

  getInvoicingEntity = (id) =>
    this.instance
      .get(`${API_INVOICING_ENTITIES}/${id}`)
      .then((response) => response);

  getPersonType = () =>
    this.instance.get(GET_PERSON_TYPE).then((response) => response);

  getPayMethod = () =>
    this.instance.get(GET_PAY_METHOD).then((response) => response);

  getRegime = () => this.instance.get(GET_REGIME).then((response) => response);

  getWayPay = () => this.instance.get(GET_WAY_PAY).then((response) => response);

  getCFDI = () => this.instance.get(GET_CFDI).then((response) => response);

  createInvoicingEntity = (payload) => {
    const data = payload || {};

    return this.instance.post(API_INVOICING_ENTITIES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateInvoicingEntity = (id, payload) => {
    const data = payload || {};

    return this.instance.put(`${API_INVOICING_ENTITIES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
