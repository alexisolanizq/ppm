import HttpClient from '../api/HttpClient';
import { API_MINDBREEZE } from '@Const/constUrls';

export default class MindbreezeService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MindbreezeService();
    }
    return this.classInstance;
  }

  getMindbreeze = () => this.instance.get(API_MINDBREEZE).then((response) => response);
}
