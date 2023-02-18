import HttpClient from '../api/HttpClient';
import {
  API_PROCEDURES,
  API_PROCEDURES_AGENT,
  API_PROCEDURES_HOLDER,
  API_INVENTORS,
  API_PROCEDURE_REQUEST,
  API_PROCEDURE_SEARCH_JOB,
  API_PROCEDURE_RENEWAL
} from '@Const/constUrls';

export default class ProcedureService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ProcedureService();
    }

    return this.classInstance;
  }

  getProcedures = () =>
    this.instance.get(API_PROCEDURES).then((response) => response.data);

  getProcedureRequest = (id) =>
    this.instance
      .get(`${API_PROCEDURE_REQUEST}/${id}`)
      .then((response) => response.data);

  getProcedure = (id) =>
    this.instance
      .get(`${API_PROCEDURES}/${id}`)
      .then((response) => response.data);

  getProcedureRenewal = (id) =>
    this.instance
      .get(`${API_PROCEDURE_RENEWAL}/${id}`)
      .then((response) => response.data);

  getMotherReference = (reference) =>
    this.instance
      .get(`${API_PROCEDURES}/motherReference/${reference}`)
      .then((response) => response.data);

  getSearchJobs = () =>
    this.instance
      .get(`${API_PROCEDURE_SEARCH_JOB}`)
      .then((response) => response.data);

  getInventors = (procedureId) =>
    this.instance
      .get(`${API_INVENTORS}/find-by-procedure-id/${procedureId}`)
      .then((response) => response.data);

  createProcedures = (payload) => {
    const data = payload || {};
    return this.instance.post(API_PROCEDURES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  createProcedureAgent(payload) {
    const data = payload || {};
    return this.instance.post(API_PROCEDURES_AGENT, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  }

  createProcedureHolder = (payload) => {
    const data = payload || {};
    return this.instance.post(API_PROCEDURES_HOLDER, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateProcedures = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_PROCEDURES}${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
