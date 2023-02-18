import { API_NOTIFICATIONS } from '@Const/constUrls';
import HttpClient from '../api/HttpClient';

export default class NotificationService extends HttpClient {
  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new NotificationService();
    }

    return this.classInstance;
  }

  notificationsList = async () =>
    this.instance.get(API_NOTIFICATIONS).then((response) => response.data);
}
