import HttpClient from '../api/HttpClient';
import { API_VACATIONS_ABSENCES } from '@Const/constUrls';

export default class VacationsAbsencesService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new VacationsAbsencesService();
    }
    return this.classInstance;
  }

  listVacationsAbsences = async () =>
    this.instance.get(API_VACATIONS_ABSENCES).then((response) => response.data);

  createVacationAbsence = async (data) =>
    this.instance.post(API_VACATIONS_ABSENCES, data).then(
      (response) => response.status,
      (error) => error
    );

  updateVacationAbsence = async (id, data) =>
    this.instance.put(`${API_VACATIONS_ABSENCES}/${id}`, data).then(
      (response) => response.status,
      (error) => error
    );
}
