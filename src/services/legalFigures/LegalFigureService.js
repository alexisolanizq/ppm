import HttpClient from '../api/HttpClient';
import {
  API_LEGAL_FIGURES,
  API_JOBAREAS_REFERENCE_TYPES
} from '@Const/constUrls';

export default class LegalFigureService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new LegalFigureService();
    }

    return this.classInstance;
  }

  getLegalFigures = async () =>
    this.instance.get(API_LEGAL_FIGURES).then(
      (response) => response.data,
      (error) => error
    );

  createLegalFigure = async (data) =>
    this.instance.post(API_LEGAL_FIGURES, data).then(
      (response) => response.status,
      (error) => error
    );

  updateLegalFigure = async (id, data) =>
    this.instance.put(`${API_LEGAL_FIGURES}/${id}`, data).then(
      (response) => response.status,
      (error) => error
    );

  getJobAreasReferenceTypes = async (data) =>
    this.instance
      .get(`${API_JOBAREAS_REFERENCE_TYPES}?job-area-id=${data}`)
      .then(
        (response) => response.data,
        (error) => error
      );
}
