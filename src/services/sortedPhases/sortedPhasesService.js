import HttpClient from '../api/HttpClient';
import {
  API_AREA_SORTED_PHASE,
  API_AREA_SORTED_PHASES,
  API_JOBAREAS_PROCEDUREPHASES,
  API_SORTED_PHASES
} from '@Const/constUrls';

export default class SortedPhaseService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new SortedPhaseService();
    }

    return this.classInstance;
  }

  getSortedPhases = () =>
    this.instance.get(API_SORTED_PHASES).then((response) => response.data);

  getAreaSortedPhase = (areaId, countryId) =>
    this.instance
      .get(`${API_AREA_SORTED_PHASES}/job-area/${areaId}/country/${countryId}`)
      .then((response) => response.data);

  getJobAreaProcedurePhases = () =>
    this.instance
      .get(API_JOBAREAS_PROCEDUREPHASES)
      .then((response) => response.data);

  getSortedPhasesById = (arspId) =>
    this.instance
      .get(`${API_SORTED_PHASES}${API_AREA_SORTED_PHASE}/${arspId}`)
      .then((response) => response.data);

  createSortedPhase = (data) =>
    this.instance
      .post(API_SORTED_PHASES, data)
      .then((response) => response.status);

  createAreaSortedPhase = (data) =>
    this.instance
      .post(API_AREA_SORTED_PHASES, data)
      .then((response) => response.data);

  updateSortedPhase = (id, data) =>
    this.instance
      .put(`${API_SORTED_PHASES}/${id}`, data)
      .then((response) => response.status);
}
