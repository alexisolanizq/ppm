import HttpClient from './api/HttpClient';
import { API_NOTIFICATIONS, API_ACTION_NOTIFICATION_RECIPENT, API_CORESPONSIBLE_USR } from '@Const/constUrls';

export default class NoticePerActionService extends HttpClient {
  static getInstance() {
      if (!this.classInstance) {
        this.classInstance = new NoticePerActionService();
      }
      return this.classInstance;
  }
  
  getNotifications = () =>
    this.instance.get(API_NOTIFICATIONS).then((response) => response.data);

  getCoresponsible = (userId) =>
    this.instance.get(`${API_CORESPONSIBLE_USR}/${userId}`).then((response) => response.data);

  getActionNotification = () =>
    this.instance.get(API_ACTION_NOTIFICATION_RECIPENT).then((response) => response.data);

  createNotifications = (payload) => {
    const data = payload || {};

    return this.instance.post(API_NOTIFICATIONS, data).then(
      (response) => response.data,
      (error) => {
        throw error;
      }
    );
  };

  createActionsNotificationRecipient = (payload) => {
    const data = payload || {};

    return this.instance.post(API_ACTION_NOTIFICATION_RECIPENT, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };

  updateNotifications = (id, payload) => {
    const data = payload || {}
    return this.instance.put(`${API_NOTIFICATIONS}/${id}`, data).then(
      (response) => response,
      (error) => {
        throw error;
      }
    );
  };
}