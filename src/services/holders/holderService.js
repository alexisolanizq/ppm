import HttpClient from '@Services/api/HttpClient';
import { API_HOLDERS, API_HOLDER_LIST } from '@Const/constUrls';

export default class HolderService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new HolderService();
    }
    return this.classInstance;
  }

  listHolders = async () =>
    this.instance.get(API_HOLDERS).then((response) => response.data);

  getHolders = async () =>
    this.instance.get(API_HOLDER_LIST).then((response) => response.data);

  createHolder = (payload) => {
    const data = payload || {};
    return this.instance.post(API_HOLDER_LIST, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}
