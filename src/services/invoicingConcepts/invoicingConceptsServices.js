import HttpClient from '@Services/api/HttpClient';
import {
  API_INVOICING_CONCEPTS,
  GET_ARTICLE_TYPE,
  GET_CONCEPT_TYPE,
  API_JOB_AREAS,
  API_PAYMENT_RIGHTS,
  API_CLIENT,
  GET_HOLDERS,
  API_AREA_INVOICE_CONCEPT,
  API_PAYMENT_RIGHT_INVOICE_CONCEPT
} from '@Const/constUrls';

export default class InvoicingConceptsService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new InvoicingConceptsService();
    }

    return this.classInstance;
  }

  getInvoicingConcepts = async () =>
    this.instance.get(API_INVOICING_CONCEPTS).then(
      (response) => response,
      (error) => error
    );

  createInvoicingConcept = async (data) =>
    this.instance.post(`${API_INVOICING_CONCEPTS}/`, data).then(
      (response) => response,
      (error) => error
    );

  updateInvoicingConcept = async (id, data) =>
    this.instance.put(`${API_INVOICING_CONCEPTS}/${id}`, data).then(
      (response) => response,
      (error) => error
    );

  getAreasInvoicingConcepts = async () =>
    this.instance.get(API_AREA_INVOICE_CONCEPT).then(
      (response) => response,
      (error) => error
    );

  createAreaInvoiceConcept = async (data) =>
    this.instance.post(`${API_AREA_INVOICE_CONCEPT}/`, data).then(
      (response) => response,
      (error) => error
    );

  updateAreaInvoiceConcept = async (data, id) =>
    this.instance.put(`${API_AREA_INVOICE_CONCEPT}/${id}`, data).then(
      (response) => response,
      (error) => error
    );

  deleteAreaInvoiceConcept = async (id) =>
    this.instance.delete(`${API_AREA_INVOICE_CONCEPT}/${id}`).then(
      (response) => response,
      (error) => error
    );

  getPaymentRightsInvoiceConcept = async () =>
    this.instance.get(API_PAYMENT_RIGHT_INVOICE_CONCEPT).then(
      (response) => response,
      (error) => error
    );

  createPaymentRightInvoiceConcept = async (data) =>
    this.instance.post(`${API_PAYMENT_RIGHT_INVOICE_CONCEPT}/`, data).then(
      (response) => response,
      (error) => error
    );

  deletePaymentRightInvoiceConcept = async (id) =>
    this.instance.delete(`${API_PAYMENT_RIGHT_INVOICE_CONCEPT}/${id}`).then(
      (response) => response,
      (error) => error
    );

  getJobAreas = () =>
    this.instance.get(API_JOB_AREAS).then((response) => response);

  getPaymentRights = () =>
    this.instance.get(API_PAYMENT_RIGHTS).then((response) => response);

  getArticlesTypes = (inSpanish) =>
    this.instance
      .get(
        `${GET_ARTICLE_TYPE}${inSpanish ? '?language_id=1' : '?language_id=2'}`
      )
      .then(
        (response) => response,
        (error) => error
      );

  getConceptsTypes = () =>
    this.instance.get(GET_CONCEPT_TYPE).then(
      (response) => response,
      (error) => error
    );

  getClients = () => this.instance.get(API_CLIENT).then((response) => response);

  getHolders = () =>
    this.instance.get(GET_HOLDERS).then(
      (response) => response,
      (error) => error
    );
}
