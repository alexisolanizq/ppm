import HttpClient from '../api/HttpClient';
import { API_MACHOTE_RELATIONSHIP } from '@Const/constUrls';

export default class MachoteRelationshipService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MachoteRelationshipService();
    }

    return this.classInstance;
  }

  listMachoteRelationship = () =>
    this.instance
      .get(API_MACHOTE_RELATIONSHIP)
      .then((response) => response.data);

  createMachoteRelationship = (data) =>
    this.instance
      .post(API_MACHOTE_RELATIONSHIP, data)
      .then((response) => response.data);
}
