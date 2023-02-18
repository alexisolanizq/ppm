import HttpClient from '../api/HttpClient';
import {
  API_LEGAL_PROCEDURE_FIGURES,
  API_PROCEDURE_TYPES,
  GET_REFERENCE_TYPES
} from '@Const/constUrls';

export default class LegalProcedureFiguresService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LegalProcedureFiguresService();
    }

    return this.classInstance;
  }

  getLegalFigures = () =>
    this.instance
      .get(API_LEGAL_PROCEDURE_FIGURES)
      .then((response) => response.data);

  getReferenceTypes = () =>
    this.instance
      .get(GET_REFERENCE_TYPES)
      .then((response) => response.data);
  
  geProcedureTypes = () =>
    this.instance.get(API_PROCEDURE_TYPES).then((response) => response.data);

  createLegalFigures = (payload) => {
    const data = payload || {};

    return  this.instance.post(API_LEGAL_PROCEDURE_FIGURES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateLegalFigures = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_LEGAL_PROCEDURE_FIGURES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
