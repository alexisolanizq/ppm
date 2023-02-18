import HttpClient from './api/HttpClient';
import { API_JOB_AREAS } from '@Const/constUrls';

export default class JobAreaService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new JobAreaService();
    }

    return this.classInstance;
  }

  getJobAreas = () =>
    this.instance.get(API_JOB_AREAS).then((response) => response.data);

  getAreas = () =>
    this.instance.get(API_JOB_AREAS).then((response) => response);
}
