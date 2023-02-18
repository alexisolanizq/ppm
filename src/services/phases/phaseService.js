import HttpClient from '@Services/api/HttpClient';
import {
  API_JOBAREAS_PROCEDUREPHASES,
  API_PROCEDURE_PHASES
} from '@Const/constUrls';

export default class PhaseService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new PhaseService();
    }
    return this.classInstance;
  }

  procedurePhasesService = () =>
    this.instance.get(API_PROCEDURE_PHASES).then((response) => response.data);

  createProcedurePhase = async (data) =>
    this.instance
      .post(API_PROCEDURE_PHASES, data)
      .then((response) => response.status);

  updateProcedurePhase = async (id, data) =>
    this.instance
      .put(`${API_PROCEDURE_PHASES}/${id}`, data)
      .then((response) => response.status);

  jobAreasProcedurePhasesService = () =>
    this.instance
      .get(API_JOBAREAS_PROCEDUREPHASES)
      .then((response) => response.data);

  createJobAreaProcedurePhase = async (data) =>
    this.instance
      .post(API_JOBAREAS_PROCEDUREPHASES, data)
      .then((response) => response.status);

  updateJobAreaProcedurePhase = async (id, data) =>
    this.instance
      .put(`${API_JOBAREAS_PROCEDUREPHASES}/${id}`, data)
      .then((response) => response.status);
}
