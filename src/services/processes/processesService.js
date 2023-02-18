import HttpClient from '../api/HttpClient';
import {
  API_PROCESSES,
  API_PROCEDURE_PHASES,
  API_LEVEL,
  API_JOBAREAS_PROCEDUREPHASES
} from '@Const/constUrls';

export default class ProcessesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ProcessesService();
    }

    return this.classInstance;
  }

  getProcesses = () =>
    this.instance.get(API_PROCESSES).then((response) => response.data);

  getProcedurePhas = () =>
    this.instance.get(API_PROCEDURE_PHASES).then((response) => response.data);

  getLevels = () =>
    this.instance.get(API_LEVEL).then((response) => response.data);

  getJobAreasProcedurePhasesService = () => {
    this.instance
      .get(API_JOBAREAS_PROCEDUREPHASES)
      .then((response) => response.data);
  };

  createProcesses = (payload) => {
    const data = payload || {};
    return this.instance.post(API_PROCESSES, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateProcesses = (id, payload) => {
    const data = payload || {};
    return this.instance.put(`${API_PROCESSES}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
